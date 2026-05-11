const mongoose=require("mongoose")

const connectDb=async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connect to database")
}

module.exports=connectDb