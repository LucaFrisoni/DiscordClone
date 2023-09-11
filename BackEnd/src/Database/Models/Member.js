const mongoose = require("mongoose");

// Enumeración para el rol del miembro
const memberRoleEnum = ["ADMIN", "MODERATOR", "GUEST"];

// Define el esquema del miembro
const memberSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: memberRoleEnum,
    default: "GUEST",
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

// Define el modelo de miembro
const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
