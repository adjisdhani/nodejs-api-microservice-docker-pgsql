const express = require("express");
const pool = require("./db");

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM review");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { book_id, review } = req.body;
  const result = await pool.query("INSERT INTO review (book_id, review) VALUES ($1, $2) RETURNING *", [book_id, review]);
  res.json(result.rows[0]);
});

module.exports = router;
