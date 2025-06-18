
const multer = require('multer');

// configuration of storage
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,__dirname)
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage:storage
})

module.exports = {
    upload
}
