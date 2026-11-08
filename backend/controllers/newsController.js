import { pool } from '../config/db.js';

export async function listNews(req, res) {
  const [rows] = await pool.query('SELECT * FROM news WHERE published = 1 ORDER BY created_at DESC');
  res.json(rows);
}

export async function createNews(req, res) {
  const { title, slug, content, image_url } = req.body;
  await pool.query('INSERT INTO news (title, slug, content, image_url) VALUES (?, ?, ?, ?)', [title, slug, content, image_url]);
  res.status(201).json({ message: 'Actualité créée' });
}

export async function deleteNews(req, res) {
  await pool.query('DELETE FROM news WHERE id = ?', [req.params.id]);
  res.json({ message: 'Actualité supprimée' });
}