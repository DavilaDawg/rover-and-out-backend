import { Router } from "express";
const router = Router();
import { getImages, getImagesByCam, getInfo, getAnnotatedImgs, postImage, getFavs, postFav, deleteFav } from "./controller.js";

router.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

router.get("/api/images/:sol", getImages);
router.get("/api/images/:sol/:cam", getImagesByCam);

router.get("/api/info", getInfo);
router.get("/save", getAnnotatedImgs)
router.post("/save", postImage);

router.get("/favs", getFavs)
router.post("/favs", postFav)
router.delete("/favs/:url", deleteFav);

export default router;
