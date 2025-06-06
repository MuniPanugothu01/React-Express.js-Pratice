const express = require("express");
const app = express();
app.use(express.json());
const bcrypt = require("bcrypt");

// function for encrypted
async function encrypted(input) {
  let Salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(input, Salt);
}

app.post("/post", async (req, res) => {
  let pass = req.body.pass;
  let FunEncrypted = await encrypted(pass);
  console.log(FunEncrypted, "pass");
  res.send({ pass: FunEncrypted });

});

app.listen(3002, () => {
  console.log("port is running! 3002");
});
