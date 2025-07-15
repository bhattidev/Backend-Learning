const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const auth = require('./middleware/auth');
const checkRole = require('./middleware/role');
const upload = require('./middleware/upload');
const File = require('./models/File');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3000;

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Mongo error:', err));

app.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  const newUser = new User({ username, email, password: hashed, role });
  await newUser.save();

  res.status(201).json({ message: 'User Registered' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: 'Wrong password' });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

app.get('/admin', auth, checkRole('admin'), (req, res) => {
  res.send('Welcome Admin!');
});

app.get('/user', auth, checkRole('user', 'admin'), (req, res) => {
  res.send(`Hello ${req.user.role}`);
});

// file upload
app.post('/upload', upload.single('myfile'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Save file info to MongoDB
  const file = new File({
    filename: req.file.filename,
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size
  });

  await file.save();

  res.json({
    message: 'File uploaded and saved to database',
    fileId: file._id,
    filename: file.filename
  });
});


// Download files
app.get('/files', async (req, res) => {
  try {
    const files = await File.find().sort({ uploadedAt: -1 });
    res.json(files);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching files' });
  }
});

// allow access to static files
app.use('/uploads', express.static('uploads'));

// Download Route
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, 'uploads', filename);
  res.download(filepath, err => {
    if (err) {
      res.status(404).json({ message: 'File not found' });
    }
  });
});

// Download by MongoDB File ID
app.get('/download-by-id/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found' });

    const filepath = path.join(__dirname, 'uploads', file.filename);
    res.download(filepath);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


// Delete file 
app.delete('/delete/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found in DB' });

    // File path in uploads folder
    const filepath = path.join(__dirname, 'uploads', file.filename);

    // 1. Delete file from folder
    fs.unlink(filepath, async (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error deleting file from folder', error: err.message });
      }

      // 2. Delete file info from MongoDB
      await File.findByIdAndDelete(req.params.id);

      res.json({ message: 'File deleted from folder and DB' });
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
