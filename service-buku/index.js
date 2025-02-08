const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use("/buku", routes);

app.listen(process.env.PORT, () => {
  console.log(`Service Buku running at http://localhost:${process.env.PORT}`);
});
