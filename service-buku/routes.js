const express = require("express");
const pool = require("./db");

const router = express.Router();

// Ambil semua buku
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM buku");
  res.json(result.rows);
});

// Tambah buku baru
router.post("/", async (req, res) => {
  const { judul, penulis } = req.body;
  const result = await pool.query("INSERT INTO buku (judul, penulis) VALUES ($1, $2) RETURNING *", [judul, penulis]);
  res.json(result.rows[0]);
});

module.exports = router;