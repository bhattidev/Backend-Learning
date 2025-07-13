const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const auth = require('./middleware/auth');
const checkRole = require('./middleware/role');

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

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
