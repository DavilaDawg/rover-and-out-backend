const express = require("express");
const app = express();
const http = require('http')
require('dotenv').config();

const cors = require("cors");
const router = require("./router.js");

//const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());
app.use(router);

const server = http.createServer(app)

server.listen(() => {
  console.log('Server running @ https://rover-server-6gl9aqzqi-isabella-davilas-projects.vercel.app');
});