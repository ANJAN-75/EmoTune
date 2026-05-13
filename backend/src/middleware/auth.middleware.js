const Usermodel=require("../models/user.model")
const blacklistModel=require("../models/blacklist.model")
const jwt=require("jsonwebtoken")
const redis = require("../config/cache")

const authUser=async(req,res,next)=>{
    const token=req.cookies.token
    const blacklist=await redis.get(token)
    if(blacklist){
        return res.status(404).json({
            message:"invalid token"
        })
        
    }
    if(!token){
        return res.status(401).json({
            message:"token not found"
        })
    }
    try{
        const decoded=jwt.verify(token,process.env.Jwt_secret)
        req.user=decoded
        next()
    }
    catch(err){
        res.status(404).json({
            mesage:"invalid token"
        })
    }
}
module.exports=authUser