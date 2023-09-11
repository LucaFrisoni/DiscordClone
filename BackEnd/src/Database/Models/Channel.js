const mongoose = require("mongoose");

// Enumeración para el tipo de canal
const channelTypeEnum = ["TEXT", "AUDIO", "VIDEO"];

// Define el esquema del canal
const channelSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 255,
  },
  type: {
    type: String,
    enum: channelTypeEnum,
    default: "TEXT",
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  serverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Server",
    required: true,
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

// Define el modelo de canal
const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;
