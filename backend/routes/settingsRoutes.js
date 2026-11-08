import { Router } from 'express';
import { getSettings, updateSettings } from '../controllers/settingsController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', getSettings);
router.put('/', authMiddleware, updateSettings);

export default router;