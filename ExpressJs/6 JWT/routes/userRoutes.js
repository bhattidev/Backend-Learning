import protect from '../middleware/authMiddleware.js';
import User from '../models/User.js';

// Example: protect all user routes
router.get('/', protect, async (req, res) => {
  const users = await User.find();
  res.json(users);
});
