const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Load the configuration file
const configPath = path.resolve(__dirname, "config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const API_URL =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
const MANIFEST_URL =
  "https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity"; // uppercase?
const API_KEY = config.API_KEY;

// Fetch manifest data to get total number of photos for a given sol
const getManifest = async (sol) => {
  try {
    const response = await axios.get(MANIFEST_URL, {
      params: { sol, api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch mission manifest:", error.message);
    throw new Error("Failed to fetch mission manifest");
  }
};

// Fetch images from NASA API
exports.getImages = async (req, res) => {
  try {
    const sol = req.query.sol;
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 25;

    // Fetch images for the current page
    const imageResponse = await axios.get(API_URL, {
      params: { sol, page, api_key: API_KEY },
    });

    // Fetch manifest to get total photos
    const manifest = await getManifest(sol);
    const totalPhotos = manifest.total_photos || 0; // Default to 0 if undefined
    const totalPages = Math.ceil(totalPhotos / pageSize);

    const imageInfo = imageResponse.data.photos.map((photo) => ({
      id: photo.id,
      img_src: photo.img_src,
      camera: photo.camera.full_name,
      earth_date: photo.earth_date,
      rover_name: photo.rover.name,
    }));

    res.json({
      data: imageInfo,
      total_images: totalPhotos,
      current_page: parseInt(page),
      page_size: parseInt(pageSize),
      total_pages: totalPages,
    });
  } catch (error) {
    console.error("Server error getting images:", error.message);
    console.error(error.stack);
    res.status(500).json({ error: "Server failed to fetch images" });
  }
};
