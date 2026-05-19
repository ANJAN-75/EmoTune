const express = require("express");
const authRoute = require("./routes/auth.route");
const songroute=require("./routes/song.route")
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//auth routes
app.use("/api/auth", authRoute);

//song routes
app.use("/api/song",songroute)

module.exports = app;
