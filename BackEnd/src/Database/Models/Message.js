const mongoose = require("mongoose");

// Define el esquema del mensaje
const messageSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  fileUrl: {
    type: String,
  },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    required: true,
  },
  channelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Channel",
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
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

// Define el modelo de mensaje
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
