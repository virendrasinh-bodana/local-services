const AdminSchema = require('../Schema/AdminSchema')
const encrypt = require('../Utils/encrypt')

const addAdmin = async (req,res) => {
     
    const hash = await encrypt.encryptePassword(req.body.password)

    const UserData = {
        name : req.body.name,
        email : req.body.email,
        password : hash,
        phone : req.body.phone,
        role : req.body.role
    }
    const admin = new AdminSchema(UserData) // we can write "const user = new UserSchema(req.body) to add user without encrypted password."
    
    admin.save((err,data) => {
        if(err){
            res.status(500).json({
                message : "Error while adding data",
                Error : err
            })
        }else{
            res.status(201).json({
                message : "the data has been added successfully",
                data : data
            })
        }
    })
}






const loginAdmin = (req,res) => {

    AdminSchema.findOne({email:req.body.email}).exec( async (err,data) =>{
        if(err){
            res.status(500).json({
                message : "Error while login"
            })
        }else{
            if(data !== null ||  data !== undefined){


                const result = await encrypt.comparePassword(req.body.password , data.password)
             
                  if(result== true){
                       res.status(201).json({
                           message : "login successfully",
                            data : data

                         })
                      }else{
                            res.status(404).json({
                           message : "Password is wrong",
                           data : data
                      })
                    
              }
           }else{
            res.status(404).json({
                message : "User not found"
            })
        }
        }
    })
}


module.exports = {
    addAdmin,
    loginAdmin
}

