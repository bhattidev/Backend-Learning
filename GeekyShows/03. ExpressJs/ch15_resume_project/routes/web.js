import express from 'express';
import homeController from '../controllers/homeController.js';
import contactController from '../controllers/contactController.js';
import skillsController from '../controllers/skillsController.js';
import servicesController from '../controllers/servicesController.js';
import aboutController from '../controllers/aboutController.js';
import portfolioController from '../controllers/portfolioController.js';

const router = express.Router();

router.get('/', homeController);
router.get('/services', servicesController);
router.get('/skill', skillsController);
router.get('/contact', contactController);
router.get('/about', aboutController);
router.get('/portfolio', portfolioController);

export default router;
