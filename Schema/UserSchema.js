const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({

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
    },
    role : {
        type : String
    }
},{
    timestamps : true
})

module.exports = mongoose.model('user' , UserSchema)