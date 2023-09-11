const express = require("express");
const {
  getProfile,
  createProfile,
} = require("../Controllers/Profile/controller");
const { getServerMembers } = require("../Controllers/Server/controller");
const router = express.Router();

// Profile
router.get("/profile", getProfile);
router.post("/createprofile", createProfile);

// Server
router.get("/server/member",getServerMembers)




module.exports = router;
