const express=require("express")
const registerController=require("../controllers/auth.controller")

const authRoute=express.Router()


//REGISTER-api/auth/register
//use to register user
authRoute.post("/register",registerController)



module.exports=authRoute