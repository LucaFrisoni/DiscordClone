const mongoose = require("mongoose");

// Define el esquema del mensaje directo
const directMessageSchema = new mongoose.Schema({
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
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conversation",
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

// Define el modelo de mensaje directo
const DirectMessage = mongoose.model("DirectMessage", directMessageSchema);

module.exports = DirectMessage;
