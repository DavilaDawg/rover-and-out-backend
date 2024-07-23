const express = require("express");
const router = express.Router();
const control = require("./controller.js");

router.get("/api/images", control.getImages);
//router.post("/dataa", control.postFav);
//router.delete("/dataa/:title", control.deleteFav);

module.exports = router;
