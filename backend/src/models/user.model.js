const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:[true,"username must required for register"],
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email must required for register"]
    },
    password:{
        type:String,
        required:[true,"password required"],
        select:false
    }

})
const Usermodel=mongoose.model("user",userSchema)

module.exports=Usermodel