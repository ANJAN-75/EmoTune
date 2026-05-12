const express=require("express")
const {registerController,LoginController}=require("../controllers/auth.controller")

const authRoute=express.Router()


//REGISTER-api/auth/register
//use to register user
authRoute.post("/register",registerController)


authRoute.post("/login",LoginController)
module.exports=authRoute