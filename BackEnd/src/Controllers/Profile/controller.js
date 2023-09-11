const Profile = require("../../Database/Models/Profile");

const getProfile = async (req, res) => {
  const { userId } = req.query;

  try {
    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(400).json("User dont exist in the database");
    }
    return res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};
const createProfile = async (req, res) => {
  const { userId, name, imageUrl, email } = req.body;
  try {
    const newProfile = new Profile({
      userId,
      name,
      imageUrl,
      email,
    });

    // Guardar el nuevo perfil en la base de datos
    await newProfile.save();

    return res.status(201).json(newProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  getProfile,
  createProfile,
};
