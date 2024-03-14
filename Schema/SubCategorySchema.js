const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SubCategorySchema  = new Schema({
    name : {
        type : String,
        unique: true
    }

},{
    timestamps : true
})

module.exports = mongoose.model('subcategory', SubCategorySchema)