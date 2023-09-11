const mongoose = require("mongoose");

// Define el esquema del perfil
const profileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    maxlength: 255,
  },
  imageUrl: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
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






// Define el modelo de perfil
const Profile = mongoose.model("Profile", profileSchema);





module.exports = Profile;
