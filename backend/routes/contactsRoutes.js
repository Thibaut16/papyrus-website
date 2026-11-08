import { Router } from 'express';
import { createContact, listContacts } from '../controllers/contactsController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', createContact);
router.get('/', authMiddleware, listContacts);

export default router;   // <-- CETTE LIGNE EST OBLIGATOIRE