const pool = require('../config/database');
const sample = {
  "id": 1,
  "user_id": 1,
  "name": "sales-data.csv",
  "file_path": "/uploads/sales-data.csv",
  "status": "pending",
  "created_at": "...",
  "updated_at": "..."
};

async function createDataset(userId, name, filePath) {
  const result = await pool.query(
    `
    INSERT INTO datasets (user_id, name, file_path)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [userId, name, filePath]
  );

  return result.rows[0];
}

async function findDatasetById(id) {
  const result = await pool.query(
    `
    SELECT *
    FROM datasets
    WHERE id = $1
    `,
    [id]
  );

  return result.rows[0];
}

async function findDatasetsByUserId(userId, limit, offset) {
  const result = await pool.query(
    `
    SELECT *
    FROM datasets
    WHERE user_id = $1
    ORDER BY created_at DESC
    LIMIT $2
    OFFSET $3
    `,
    [userId, limit, offset]
  );

  return result.rows;
}

async function updateDataset(id, name, status) {
  const result = await pool.query(
    `
    UPDATE datasets
    SET
      name = COALESCE($2, name),
      status = COALESCE($3, status),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $1
    RETURNING *
    `,
    [id, name, status]
  );

  return result.rows[0];
}

async function deleteDataset(id) {
  const result = await pool.query(
    `
    DELETE FROM datasets
    WHERE id = $1
    RETURNING *
    `,
    [id]
  );

  return result.rows[0];
}

module.exports = {
  createDataset,
  findDatasetById,
  findDatasetsByUserId,
  updateDataset,
  deleteDataset
};
