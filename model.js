const mongoose = require("mongoose");
require('dotenv').config();

const uri = `mongodb+srv://DavilaDawg:veryeasypassword12341@roverandout.xe3uetx.mongodb.net/roverAndOut?retryWrites=true&w=majority`;

mongoose.connect(uri)
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch(err => console.error("Error connecting to MongoDB:", err));

const dataSchema = new mongoose.Schema({
  url: { type: String, required: true }, 
  camera: { type: String, required: false },
  sol: { type: String, required: false },
  metadata: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
});

const Model = mongoose.model("Image", dataSchema);

module.exports = { Model };
