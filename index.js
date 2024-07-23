const express = require("express");
const app = express();

var cors = require("cors");
const router = require("./router.js");

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, function() {
  console.log(`Server @  http://localhost:${PORT}`);
});
