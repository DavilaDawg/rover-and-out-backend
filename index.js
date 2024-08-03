const express = require("express");
const app = express();
const http = require('http')
require('dotenv').config();

const cors = require("cors");
const router = require("./router.js");

const port = process.env.PORT || 4000;

const frontendOrigin = "https://rover-out.vercel.app"

app.use(cors({
  origin: frontendOrigin,
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: "Content-Type"
}));

app.options('*', cors()); // Preflight request handling

app.use(express.json());
app.use(router);

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server running @ http://localhost:${port}`);
});