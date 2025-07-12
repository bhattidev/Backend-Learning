import express from 'express';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js'

const app = express();
const port = 3000;

// Custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Static files
app.use(express.static('public'));

// Use router
app.use('/user', userRoutes);

// Admin router
app.use('/admin', adminRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
