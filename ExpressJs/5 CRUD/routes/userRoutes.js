import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// CREATE - POST
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }  
});

// READ - GET all
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ - GET one
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// UPDATE - PUT
router.put('/:id', async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE - DELETE
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

export default router;
