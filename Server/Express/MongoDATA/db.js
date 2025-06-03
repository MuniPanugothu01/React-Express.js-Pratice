const { mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// connection string mongodb
function DbData() {
  mongoose
    .connect(process.env.MONGO_DB_URL)
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
