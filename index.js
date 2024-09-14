const express = require("express");
const app = express();
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const http = require('http')

const cors = require("cors");
const router = require("./router.js");

const port = 3000; 

app.use(cors());
app.use(express.json());
app.use(router);

const server = http.createServer(app)

app.listen(port, () => {
  console.log(`Server @  http://localhost:${port}`);
});

/*
server.listen(port, () => {
  console.log(`Public server on port ${port}`)
})
*/