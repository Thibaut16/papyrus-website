import { pool } from '../config/db.js';

export async function listFees(req, res) {
  const [rows] = await pool.query(`
    SELECT tf.*, c.name AS class_name
    FROM tuition_fees tf
    LEFT JOIN classes c ON c.id = tf.class_id
  `);
  res.json(rows);
}

export async function updateFee(req, res) {
  const { registration_fee, tranche1, tranche2, tranche3, total } = req.body;
  await pool.query(
    'UPDATE tuition_fees SET registration_fee=?, tranche1=?, tranche2=?, tranche3=?, total=? WHERE id=?',
    [registration_fee, tranche1, tranche2, tranche3, total, req.params.id]
  );
  res.json({ message: 'Tarif mis à jour' });
}