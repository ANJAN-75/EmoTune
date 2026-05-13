const express=require("express")
const {registerController,LoginController,getMeController,logoutController}=require("../controllers/auth.controller")
const authUser=require("../middleware/auth.middleware")
const authRoute=express.Router()


//REGISTER-api/auth/register
//use to register user
authRoute.post("/register",registerController)

//LOGIN-api/auth/login
//use to login user
authRoute.post("/login",LoginController)
module.exports=authRoute


//GETME-api/auth/getme
//use to fetched urself
authRoute.get("/getme",authUser,getMeController)


//LOGOUT-api/auth/logout
authRoute.get("/logout",authUser,logoutController)