const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const app = express();

app.use("/buku", createProxyMiddleware({ target: process.env.SERVICE_BUKU_URL, changeOrigin: true }));
app.use("/review", createProxyMiddleware({ target: process.env.SERVICE_REVIEW_URL, changeOrigin: true }));

app.listen(process.env.PORT, () => {
    console.log(`API Gateway running at http://localhost:${process.env.PORT}`);
});