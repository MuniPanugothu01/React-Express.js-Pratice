const express = require("express");
const app = express();
require("./config/database.js");

let PORT = 3003;
app.listen(PORT, () => {
  console.log(`port is running with ${PORT}`);
});
