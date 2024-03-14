const SubCategorySchema = require("../Schema/SubCategorySchema");

const addSubCategory = (req,res) => {

    const subCategory = new SubCategorySchema(req.body)

    subCategory.save((err,data) => {
        if(err){
            res.status(500).json({
                message: "error while adding subcategory"
            })
        }else{
            res.status(201).json({
                message: "subcategory added successfully",
                data : data
            })
        }
    })
}

const getAllSubCategory = (req,res)  => {
    
    SubCategorySchema.find((err,data) => {
        if(err){
            res.status(500).json({
                message : "Error while fetching subcotegories"
            })
        }else{
            res.status(200).json({
                message : "subcategories (data) found",
                data : data
            })
        }
    })
}

const deleteSubCategory = (req,res) =>{

    const id = req.params.id

    SubCategorySchema.findByIdAndDelete(id,(err,data)=> {
        if(err){
            res.status(500).json({
                message: "Error deleting subcategory"
            })
        }else{
            res.status(200).json({
                message : "subcategory deleted..",
                data : data
            })
        }
        
    })
}

module.exports = {
    addSubCategory,
    getAllSubCategory,
    deleteSubCategory
}