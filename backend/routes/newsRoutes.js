import { Router } from 'express';
import { listNews, createNews, deleteNews } from '../controllers/newsController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', listNews);
router.post('/', authMiddleware, createNews);
router.delete('/:id', authMiddleware, deleteNews);

export default router;