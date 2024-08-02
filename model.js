import mongoose from "mongoose";

const username = encodeURIComponent("DavilaDawg");
const password = encodeURIComponent(process.env.MONGO_PASSWORD);

const uri = `mongodb+srv://${username}:${password}@roverandout.xe3uetx.mongodb.net/?appName=roverAndOut`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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

export default Model;
