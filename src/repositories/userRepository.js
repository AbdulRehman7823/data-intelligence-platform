const pool = require("../config/database");

async function createUser(email, passwordHash){
    const result = await pool.query(`
        INSERT into users (email, password_hash)
        values ($1, $2)
        RETURNING id, email, created_at`,[email,passwordHash]);
        console.log("done")
        return result.rows[0];
        
}


async function findUserByEmail(email) {
  const result = await pool.query(
    `
    SELECT id, email, password_hash, created_at
    FROM users
    WHERE email = $1
    `,
    [email]
  );

  return result.rows[0];
}

module.exports = {
  createUser,
  findUserByEmail
};