const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const cors = require('cors')
const PORT = 4000

app.use(cors())

const UserRoutes = require('./Routes/UserRoutes')
const CategoryRoutes = require('./Routes/CategoryRoutes')
const SubCategoryRoutes = require('./Routes/SubCategoryRoutes')
const ServiceRoutes = require('./Routes/ServiceRoutes')
const AdminRoutes = require('./Routes/AdminRoutes')
// const FileUploadRoutes = require('./Routes/FileUploadRoutes')

app.use('/user', UserRoutes)
app.use('/category', CategoryRoutes)
app.use('/subcategory', SubCategoryRoutes)
app.use('/service', ServiceRoutes)
app.use('/admin', AdminRoutes)
// app.use('/file',FileUploadRoutes)



mongoose.connect("mongodb://127.0.0.1:27017/local_services",{
    useNewUrlParser:true,
    useUnifiedTopology : true
}, (err) => {
    if(err){
        console.log("not connected to db")
    } 
    else{
        console.log("connected to database..")
    }
})

app.listen(PORT,() => {
    console.log("server has started on port : " , PORT)
})

