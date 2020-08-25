const mongoose=require('mongoose')
const express=require('express')
const cookieParser=require('cookie-parser')
const mongooseService=require('./Services/mongoose')
const app=express()
app.use(cookieParser())
app.use(express.json())


const userRouter=require('./Routes/User')

app.use('./user',userRouter)
mongooseService.connect();

app.listen(5000,()=>{
    console.log("server started successfully")
})
module.exports=app;