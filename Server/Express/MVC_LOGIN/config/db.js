const mongooose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
function DbConnect(){
    mongooose.connect(process.env.MONGO_DB_URL).then(()=>{
        console.log('mongoDB connected MVC');
    }).catch((err)=>{
        console.log('Not connected MongoDB',err);
    })
}

module.exports = {DbConnect}