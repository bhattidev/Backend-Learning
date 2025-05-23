import express from 'express';
import StudentController from '../controllers/studentController.js';

const router = express.Router();

// Routes
router.get('/', StudentController.getAllDoc);
router.post('/create', StudentController.createDoc);
router.get('/edit/:id', StudentController.editDoc);
router.post('/update/:id', StudentController.updateDocById);
router.post('/delete/:id', StudentController.deleteDocById);

export default router;
