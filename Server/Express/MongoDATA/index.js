const express = require("express");

const app = express();

let PORT = 3001;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
