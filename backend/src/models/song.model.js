const mongoose = require("mongoose");

const songschema = new mongoose.Schema({
  url: {
    type:String,
    required:[true,"without songUrl song doesnot created"]
  },
  posterUrl:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  mood:{
    type:String,
    enum:{
        values:["sad","happy","surprised"],
        message:"enum this is"
    }
  }
});


const songModel=mongoose.model("song",songschema)

module.exports=songModel