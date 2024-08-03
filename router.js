const express = require("express");
const router = Router();
const control = require("./controller.js");

router.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

router.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

router.get("/api/images/:sol", control.getImages);
router.get("/api/images/:sol/:cam", control.getImagesByCam);

router.get("/api/info", control.getInfo);
router.get("/save", control.getAnnotatedImgs)
router.post("/save", control.postImage);

router.get("/favs", control.getFavs)
router.post("/favs", control.postFav)
router.delete("/favs/:url", control.deleteFav);

module.exports = router;