const { mongoose } = require("mongoose");
// connection string mongodb
function DbData() {
  mongoose
    .connect("mongodb://localhost:27017/UserData")
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.log("not connected mongodb", err);
    });
}
module.exports = {
  DbData,
};
