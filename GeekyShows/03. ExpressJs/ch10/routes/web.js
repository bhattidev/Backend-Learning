import express from 'express';
import { homeController } from '../controllers/homeController';
import { aboutController } from '../controllers/aboutController';
const router = express.Router();

router.get('/', homeController);
router.get('/about', aboutController);

export default router;
