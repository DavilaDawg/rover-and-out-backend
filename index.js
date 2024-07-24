const express = require("express");
const app = express();
require('dotenv').config();

var cors = require("cors");
const router = require("./router.js");

const port = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, function() {
  console.log(`Server @  http://localhost:${port}`);
});
