const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { required: true, type: String },
  last_name: { required: true, type: String },
  profile_pic_url: { required: true, type: String },
});
module.exports = mongoose.model("user", userSchema);
