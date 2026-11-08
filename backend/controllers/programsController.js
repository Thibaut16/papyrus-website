import { pool } from '../config/db.js';

export async function listPrograms(req, res) {
  const [rows] = await pool.query('SELECT * FROM programs ORDER BY cycle, category');
  res.json(rows);
}

export async function getProgram(req, res) {
  const [rows] = await pool.query('SELECT * FROM programs WHERE slug = ?', [req.params.slug]);
  if (!rows.length) return res.status(404).json({ message: 'Filière introuvable' });
  res.json(rows[0]);
}

export async function createProgram(req, res) {
  const { name, slug, code, cycle, category, description, objectives, skills, careers } = req.body;
  await pool.query(
    'INSERT INTO programs (name, slug, code, cycle, category, description, objectives, skills, careers) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [name, slug, code, cycle, category, description, objectives, skills, careers]
  );
  res.status(201).json({ message: 'Filière créée' });
}

export async function updateProgram(req, res) {
  const { name, code, cycle, category, description, objectives, skills, careers } = req.body;
  await pool.query(
    'UPDATE programs SET name=?, code=?, cycle=?, category=?, description=?, objectives=?, skills=?, careers=? WHERE id=?',
    [name, code, cycle, category, description, objectives, skills, careers, req.params.id]
  );
  res.json({ message: 'Filière mise à jour' });
}

export async function deleteProgram(req, res) {
  await pool.query('DELETE FROM programs WHERE id = ?', [req.params.id]);
  res.json({ message: 'Filière supprimée' });
}