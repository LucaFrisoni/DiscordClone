require("dotenv").config();
const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;

// mysql
// const dbConfig = {
//   host: "aws.connect.psdb.cloud",
//   user: "qr3987eff1qly474gab7",
//   password: "pscale_pw_SAcf1CGJQ7VemwpmueSTlS9aRVI2YfG0SLqrdz6XU5e",
//   database: "discord-clone",
// };

// const pool = mysql.createPool(dbConfig);

// module.exports = pool;
