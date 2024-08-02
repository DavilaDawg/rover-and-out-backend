const express = require("express");
const app = express();
const http = require('http')
require('dotenv').config();

var cors = require("cors");
const router = require("./router.js");

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(router);

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server running @ http://localhost:${port}`);
});