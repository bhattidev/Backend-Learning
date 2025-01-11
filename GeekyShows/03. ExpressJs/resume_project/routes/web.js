import express from 'express';
import homeController from '../controllers/homeController.js';
import contactController from '../controllers/contactController.js';
import skillsController from '../controllers/skillsController.js';
import servicesController from '../controllers/servicesController.js';

const router = express.Router();

router.get('/', homeController);
router.get('/services', servicesController);
router.get('/skills', skillsController);
router.get('/contact', contactController);

export default router;
