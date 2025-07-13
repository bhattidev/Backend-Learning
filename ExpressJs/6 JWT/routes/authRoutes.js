import express from 'express';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { name, email, password, age } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'User already exists' });

  const user = await User.create({ name, email, password, age });
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id)
  });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id)
  });
});

export default router;
