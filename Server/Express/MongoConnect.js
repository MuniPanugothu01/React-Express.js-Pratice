const express = require("express");
const app = express();

let PORT = 3009;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
