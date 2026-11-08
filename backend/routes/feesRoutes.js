import { Router } from 'express';
import { listFees, updateFee } from '../controllers/feesController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();   // ← Cette ligne manquait

router.get('/', listFees);
router.patch('/:id', authMiddleware, updateFee);

export default router;