import { pool } from '../config/db.js';

export async function listGallery(req, res) {
  const [rows] = await pool.query('SELECT * FROM gallery ORDER BY created_at DESC');
  res.json(rows);
}

export async function uploadImage(req, res) {
  const { title, category } = req.body;
  const image_url = `/uploads/${req.file.filename}`;
  await pool.query('INSERT INTO gallery (title, category, image_url) VALUES (?, ?, ?)', [title, category, image_url]);
  res.status(201).json({ message: 'Image ajoutée', image_url });
}

export async function deleteImage(req, res) {
  await pool.query('DELETE FROM gallery WHERE id = ?', [req.params.id]);
  res.json({ message: 'Image supprimée' });
}