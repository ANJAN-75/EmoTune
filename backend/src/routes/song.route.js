const express=require("express")
const {uploadSong,getSong}=require("../controllers/song.controller")
const upload=require("../middleware/upload.middleware")

const songroute=express.Router()

//Add song-/api/song/add
// this api used to add song 
songroute.post("/add",upload.single("song"),uploadSong)


//get song According to mood
//get api/song
songroute.get("/",getSong)


module.exports=songroute