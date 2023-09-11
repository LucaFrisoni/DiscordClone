const mongoose = require("mongoose");

// Define el esquema de la conversación
const conversationSchema = new mongoose.Schema(
  {
    memberTwoId: { type: string },
    memberTwoId: { type: string },
    memberOne: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    memberTwoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
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
  },
  {
    _id: false, // Evita que Mongoose agregue un ObjectId predeterminado
    unique: true, // Restricción única para la combinación de memberOneId y memberTwoId
  }
);

// Define el modelo de conversación
const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
