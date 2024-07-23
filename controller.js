const Model = require("./model.js");
const axios = require('axios');

const API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
const API_KEY = 'rg6Uxcw3bogOxum4jEemhfj8grGjhFzbaKidUz85';

exports.getImages = async (req, res) => {
  try {
    const sol = req.query.sol || 1000; // ex param
    const response = await axios.get(`${API_URL}?sol=${sol}&api_key=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.log("Server error getting images")
    res.status(500).json({ error: 'Failed to fetch images' });
  }
};


