const mongoose = require("mongoose");

async function load() {
  await mongoose.connect("mongodb://127.0.0.1:27017/roverAndOut");
}

load().catch((err) => console.log(err));

const dataSchema = new mongoose.Schema({
  camera: { type: String, required: true },
  url: { type: String, required: true },
});

const Model = mongoose.model("image", dataSchema);

module.exports = Model;
