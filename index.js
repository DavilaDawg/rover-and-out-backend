const express = require("express");
const app = express();
const http = require('http')
require('dotenv').config();

var cors = require("cors");
const router = require("./router.js");

const port = 3000; 

app.use(cors());
app.use(express.json());
app.use(router);

const server = http.createServer(app)

/*
app.listen(port, '0.0.0.0', function() {
  console.log(`Server @  http://localhost:${port}`);
});
*/

server.listen(port, () => {
  console.log(`Public server on port ${port}`)
})