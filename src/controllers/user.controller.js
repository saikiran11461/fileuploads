const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
const upload = require("../utils/file_upload");

router.post("", upload.single("profile_pic"), async (req, res) => {
  try {
    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_pic_url: req.file.path,
    });
    res.send(user);
  } catch (e) {
    res.send({ error: e.message });
  }
});
router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    res.send(user);
  } catch (e) {
    res.send({ error: e.message });
  }
});
router.patch("/:user_id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id).lean().exec();
    res.send(user);
  } catch (e) {
    res.send({ error: e.message });
  }
});
router.delete("/:user_id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    res.send(user);
  } catch (e) {
    res.send({ error: e.message });
  }
});

module.exports = router;
