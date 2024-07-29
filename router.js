const express = require("express");
const router = express.Router();
const control = require("./controller.js");

router.get("/api/images/:sol", control.getImages);
router.get("/api/info", control.getInfo);
router.post("/save", control.postImage);
//router.post("/favorites", control.postFav);
//router.delete("/favorites/:title", control.deleteFav);

module.exports = router;
