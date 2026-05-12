const Usermodel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//register controller
const registerController = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const existingUser = await Usermodel.findOne({
    $or: [{ email: email }, { username: username }],
  });
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "Acount already exist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await Usermodel.create({
    username: username,
    email: email,
    password: hashedPassword,
  });
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.Jwt_secret,
    {
      expiresIn: "1d",
    },
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "Account created suceefully",
    data: {
      username: username,
      email: email,
    },
  });
};
//Login Controller
const LoginController = async (req, res) => {
  const { email, username, password } = req.body;
  const existingUser =await  Usermodel.findOne({
    $or: [{ email: email }, { username: username }],
  });
  if(!existingUser){
    return res.status(404).json({
      message:"Invalid credential"
    })
  }
  const validPass=await bcrypt.compare(password,existingUser.password)
  if(!validPass){
    return res.status(404).json({
      message:"Invalid credential"
    })
  }
  const token=jwt.sign(
    {id:existingUser._id},
    process.env.Jwt_secret,
    {expiresIn:"3d"}
  )
  res.cookie("token",token)
  res.status(200).json({
    message:"Login Sucessfull",
    data:{
      email,
      username
    }
  })
};

module.exports = {registerController,LoginController};
