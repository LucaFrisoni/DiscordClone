const Profile = require("../../Database/Models/Profile");
const Server = require("../../Database/Models/Server");
const Member = require("../../Database/Models/Member");

const getServerMembers = async (req, res) => {
  const { userId } = req.query;

  try {
    if (!userId) {
      return res.status(400).json("UserId not pass");
    }

    const members = await Member.find({
      profileId: userId,
    }).populate("serverId");

    if (!members.length) {
      return res.status(200).json("User dont belong to any server");
    }
    const servers = members.map((member) => member.serverId);

    return res.status(200).json(servers);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

module.exports = { getServerMembers };
