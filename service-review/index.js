/* const express = require("express");
const pool = require("./db");

const router = express.Router();

// Ambil semua review
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM review");
  res.json(result.rows);
});

// Tambah review baru
router.post("/", async (req, res) => {
  const { book_id, review } = req.body;
  const result = await pool.query("INSERT INTO review (book_id, review) VALUES ($1, $2) RETURNING *", [book_id, review]);
  res.json(result.rows[0]);
});

module.exports = router; */

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use("/review", routes);

app.listen(process.env.PORT, () => {
  console.log(`Service Review running at http://localhost:${process.env.PORT}`);
});

