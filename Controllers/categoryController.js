const CategorySchema = require("../Schema/CategorySchema");

const addCategory = (req,res) => {

    const category = new CategorySchema(req.body)

    category.save((err,data) => {
        if(err){
            res.status(500).json({
                message: "error while adding category"
            })
        }else{
            res.status(201).json({
                message: "category added successfully",
                data : data
            })
        }
    })
}

const getAllCategory = (req,res)  => {
    
    CategorySchema.find((err,data) => {
        if(err){
            res.status(500).json({
                message : "Error while fetching cotegories"
            })
        }else{
            res.status(200).json({
                message : "categories (data) found",
                data : data
            })
        }
    })
}

const deleteCategory = (req,res) =>{

    const id = req.params.id

    CategorySchema.findByIdAndDelete(id,(err,data)=> {
        if(err){
            res.status(500).json({
                message: "Error deleting category"
            })
        }else{
            res.status(200).json({
                message : "category deleted..",
                data : data
            })
        }
        
    })
}

module.exports = {
    addCategory,
    getAllCategory,
    deleteCategory
}