import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';

router.get('/', UserController.home);

export default router;
