const express = require("express");
const app = express();

const fs = require("fs");
const multer = require("multer");
const path = require("path");

// create the newDirectry it mean create the folder
const newDirectry = path.join(__dirname, "uploads");
// it creates the multiple folders, then we can use the condition
if (!fs.existsSync(newDirectry)) {
  fs.mkdirSync(newDirectry);
}

// configuration of storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, newDirectry);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({
  storage: storage,
});

// router
app.post("/uploads", uploadImg.single("image"), (req, res) => {
    const {name, email} = req.body
  console.log(req.file);
  res.send({path:req.file.path,user:name, email});
});

let PORT = 3003;
app.listen(PORT, () => {
  console.log(`port is running ${PORT}`);
});
