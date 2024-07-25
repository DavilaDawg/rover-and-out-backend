const express = require("express");
const app = express();
require('dotenv').config();

var cors = require("cors");
const router = require("./router.js");

const port = 3000; 

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, '0.0.0.0', function() {
  console.log(`Server @  http://localhost:${port}`);
});
