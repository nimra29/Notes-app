const config=require('../config/config')
const mongoose=require('mongoose')

exports.connect=()=>{

    url='mongodb://localhost:27017/'+config.name

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
   if(!err)
       console.log(err);
        
   console.log("database connected successfully")    
})
}
