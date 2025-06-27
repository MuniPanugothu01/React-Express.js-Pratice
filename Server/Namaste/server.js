const express = require("express");
const app = express();
const {ConnectDB} =  require("./config/database.js");
ConnectDB()
let PORT = 3003;
app.listen(PORT, () => {
  console.log(`port is running with ${PORT}`);
});
