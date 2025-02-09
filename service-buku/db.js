const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  /* host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME, */
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Diperlukan untuk koneksi ke Supabase
  },
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("Error connecting to database", err);
  } else {
    console.log("Connected to database", res.rows);
  }
});

module.exports = pool;