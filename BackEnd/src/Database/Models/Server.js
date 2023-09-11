const mongoose = require("mongoose");

// Define el esquema del servidor
const serverSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 255,
  },
  imageUrl: {
    type: String,
  },
  inviteCode: {
    type: String,
    unique: true,
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Define el modelo de servidor
const Server = mongoose.model("Server", serverSchema);

module.exports = Server;
