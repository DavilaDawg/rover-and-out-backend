const mongoose = require("mongoose");

async function load() {
  await mongoose.connect("mongodb://127.0.0.1:27017/roverAndOut");
}

load().catch((err) => console.log("Error connecting to MongoDB:", err));

const dataSchema = new mongoose.Schema({
  url: { type: String, required: true }, // Points to where the image is stored?? (AWS S3)
  camera: { type: String, required: false },
  sol: { type: String, required: false },
  metadata: { // Annotations are stored separately than the image, in the db
    type: mongoose.Schema.Types.Mixed, // Allows for storing arbitrary data
    required: false,
  },
});

const Model = mongoose.model("image", dataSchema);

module.exports = Model;