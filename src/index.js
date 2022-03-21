const express = require("express");
const app = express();
const connect = require("./configs/db");

const userController = require("./controllers/user.controller");
app.use("/user", userController);
const galleryController = require("./controllers/gallery.controller");
app.use("/gallery", galleryController);

app.listen(3456, async () => {
  try {
    await connect();
    console.log("listening to poer 3456");
  } catch (e) {
    console.log("something went wrong:", e.message);
  }
});
