import express from 'express';
import homeConstructor from '../controllers/homeController.js';
import aboutController from '../controllers/aboutController.js';

const router = express.Router();

router.get('/', homeConstructor);
router.get('/about', aboutController);

export default router;
