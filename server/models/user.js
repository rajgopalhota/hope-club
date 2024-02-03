const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  password: String,
  department: String,
  role: { type: String, default: "DefaultUser" },
  createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
