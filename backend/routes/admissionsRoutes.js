import { Router } from 'express';
import { createAdmission, listAdmissions, updateAdmissionStatus } from '../controllers/admissionsController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();
router.post('/', createAdmission);
router.get('/', authMiddleware, listAdmissions);
router.patch('/:id', authMiddleware, updateAdmissionStatus);
export default router;