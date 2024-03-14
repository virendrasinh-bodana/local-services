const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FileUploadSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    size : {
        type : Number
    }, 
    url : {
        type : String
    },
    type : {
        type : String
    }
},{
    timestamps : true
})

module.exports = mongoose.model('fileupload' , FileUploadSchema)