require('dotenv').config();

console.log("DATABASE_URL:", process.env.DATABASE_URL); // Cek apakah terbaca

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Diperlukan untuk koneksi ke Supabase
  },
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database at:', res.rows[0].now);
  }
  pool.end(); // Tutup koneksi setelah tes selesai
});