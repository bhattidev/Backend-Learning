import { homeController } from '../controllers/homeController.js';
import { aboutController } from '../controllers/aboutController.js';

import express from 'express';

const router = express.Router();

router.get('/', homeController);
router.get('/about', aboutController);

export default router;
