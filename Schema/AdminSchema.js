const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({

    name:{
        type : String
    },
    email:{
        type : String,
        unique : true
    },
    password :{
        type : String
    },
    phone : {
        type : Number
    }
},{
    timestamps : true
})

module.exports = mongoose.model('admin' , AdminSchema)