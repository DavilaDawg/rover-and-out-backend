const Model = require("./model.js");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Load the configuration file:
const configPath = path.resolve(__dirname, "config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const API_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
const API_KEY = config.API_KEY;

// Fetch images from server:
exports.getImages = async (req, res) => {
  try {
    const sol = req.query.sol;
    const response = await axios.get(
      `${API_URL}?sol=${sol}&api_key=${API_KEY}`
    );

    const imageInfo = response.data.photos.map((photo) => ({
      id: photo.id,
      img_src: photo.img_src,
      camera: photo.camera.full_name,
      earth_date: photo.earth_date,
      rover_name: photo.rover.name,
    }));

    res.json(imageInfo);
  } catch (error) {
    console.error("Server error getting images:", error.message);
    console.error(error.stack);
    res.status(500).json({ error: "Server failed to fetch images" });
  }
};
