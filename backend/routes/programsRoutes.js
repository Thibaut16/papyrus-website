import { Router } from 'express';
import {
  listPrograms,
  getProgram,
  createProgram,
  updateProgram,
  deleteProgram
} from '../controllers/programsController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

// Routes publiques
router.get('/', listPrograms);
router.get('/:slug', getProgram);

// Routes protégées (admin)
router.post('/', authMiddleware, createProgram);
router.put('/:id', authMiddleware, updateProgram);
router.delete('/:id', authMiddleware, deleteProgram);

export default router;