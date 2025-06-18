const express = require("express");
const app = express();
const multer = require("multer");
// middle ware urlencoded
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ ' ' + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

let PORT = 3002;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
