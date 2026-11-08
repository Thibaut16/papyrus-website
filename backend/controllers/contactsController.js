import { pool } from '../config/db.js';

export async function createContact(req, res) {
  const { name, email, phone, message } = req.body;
  await pool.query('INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)', [name, email, phone || null, message]);
  res.status(201).json({ message: 'Message envoyé' });
}

export async function listContacts(req, res) {
  const [rows] = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
  res.json(rows);
}