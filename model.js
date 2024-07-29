const mongoose = require("mongoose");

async function load() {
  await mongoose.connect("mongodb://127.0.0.1:27017/roverAndOut");
}

load().catch((err) => console.log("Error connecting to MongoDB:", err));

const dataSchema = new mongoose.Schema({
  url: { type: String, required: true },
  camera: { type: String, required: false },
  sol: { type: String, required: false },
  metadata: {
    type: mongoose.Schema.Types.Mixed, // Allows for storing arbitrary data
    required: false,
  },
});

const Model = mongoose.model("image", dataSchema);

module.exports = Model;
