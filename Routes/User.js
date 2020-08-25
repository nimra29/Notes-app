const express=require('express')
const router=express.Router();
const User=require('../Model/user')



router.post('/register',(req,res)=>{
    console.log("hey")
    const{email,username,name,password}=req.body;
    User.findOne({email},(err,user)=>{
        if(err)
            console.log(err);
        if(user)
            console.log("User already exists");
        else{
            const newUser=new User({email,username,name,password})
            newUser.save(err=>{
                if(err)
                    console.log("error in saving");
                else 
                    console.log("account successfully created")    
            })
        
        }
                
    })
})
module.exports=router;
