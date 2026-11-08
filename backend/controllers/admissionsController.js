import { pool } from '../config/db.js';

export async function createAdmission(req, res) {
  const { full_name, email, phone, class_applied, message } = req.body;
  try {
    await pool.query(
      'INSERT INTO admissions (full_name, email, phone, class_applied, message) VALUES (?, ?, ?, ?, ?)',
      [full_name, email, phone, class_applied || null, message || null]
    );
    res.status(201).json({ message: 'Demande enregistrée' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function listAdmissions(req, res) {
  const [rows] = await pool.query('SELECT * FROM admissions ORDER BY created_at DESC');
  res.json(rows);
}

export async function updateAdmissionStatus(req, res) {
  const { status } = req.body;
  await pool.query('UPDATE admissions SET status = ? WHERE id = ?', [status, req.params.id]);
  res.json({ message: 'Statut mis à jour' });
}