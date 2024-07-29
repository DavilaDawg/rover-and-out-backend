const Model = require("./model.js");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Load the configuration file:
const configPath = path.resolve(__dirname, "config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const NASA_API_BASE_URL = "https://api.nasa.gov/mars-photos/api/v1";
const API_KEY = config.API_KEY;

async function getImages(req, res) {
  const { sol } = req.params; // Retrieve the sol from the URL parameters

  try {
    const response = await axios.get(
      `${NASA_API_BASE_URL}/rovers/curiosity/photos`,
      {
        params: {
          sol,
          api_key: API_KEY,
        },
      }
    );

    const images = response.data.photos;
    res.status(200).json({
      //sending back to service
      success: true,
      photos: images, // arr of objs
      total_photos: images.length,
    });
  } catch (error) {
    console.error("Error fetching images:", error.message);
    res.status(500).json({
      success: false,
      error: "Error fetching images from NASA API",
    });
  }
}

async function getInfo(req, res) {
  try {
    const response = await axios.get(`${NASA_API_BASE_URL}/save`, {
      params: {
        api_key: API_KEY,
      },
    });

    const manifest = response.data.photo_manifest;
    res.status(200).json({
      success: true,
      data: manifest,
    });
  } catch (error) {
    console.error("Error fetching manifest info:", error.message);
    res.status(500).json({
      success: false,
      error: "Error fetching manifest info from NASA API",
    });
  }
}

async function getAnnotatedImgs(req, res) {
  try {
    res.body = await Model.find();
    res.status = 200;
    res.send(res.body);
  } catch (error) {
    console.log(error);
    res.send("Sever error getting annotations");
  }
}

async function postImage(req, res) {
  try {
    const { imageData, metadata } = req.body; // Url and annotations

    if (!imageData || !metadata) {
      return res
        .status(400)
        .json({
          success: false,
          error: "Bad Request: Missing image data or metadata",
        });
    }

    const data = new Model({
      url: imageData,
      metadata: metadata,
    });

    await data.save();
    res.status(201).json({ success: true, message: "Posted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Server error posting" });
  }
}

async function getFavs (req, res) {
  try {
    res.body = await Model.find();
    res.status = 200;
    res.send(res.body);
  } catch (error) {
    res.send("server error getting");
  }
};

async function postFav (req, res) {
  try {
    const data = new Model({
      url: req.body.imageData,
    });
    data.save();
    res.status(201);
  } catch (error) {
    res.send("server error getting");
  }
};

async function deleteFav (req, res) {
  try {
    const { URL } = req.params;
    console.log(URL);
    res.body = await Model.findOneAndDelete({
      url: URL,
    });
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

module.exports = {
  getImages,
  getInfo,
  postImage,
  getAnnotatedImgs,
  getFavs,
  postFav, 
  deleteFav
};
