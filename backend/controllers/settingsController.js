import { pool } from '../config/db.js';

export async function getSettings(req, res) {
  const [rows] = await pool.query('SELECT * FROM school_settings');
  const settings = Object.fromEntries(rows.map((r) => [r.setting_key, r.setting_value]));
  res.json(settings);
}

export async function updateSettings(req, res) {
  const updates = req.body;
  for (const [key, value] of Object.entries(updates)) {
    await pool.query(
      'INSERT INTO school_settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = ?',
      [key, value, value]
    );
  }
  res.json({ message: 'Paramètres mis à jour' });
}