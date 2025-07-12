import express from 'express';
const router = express.Router();

router.get('/profile', (req, res) => {
  res.send('User Profile');
});

router.get('/settings', (req, res) => {
  res.send('User Settings');
});

export default router;
