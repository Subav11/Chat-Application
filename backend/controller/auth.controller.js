import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/genreateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } =
      req.body;
    // console.log(fullname,username,password,confirmPassword,gender)
    if (!fullname || !username || !password || !confirmPassword ||! gender) {
      return res.status(400).json({ error: "Please fill in all fields" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password's do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ error: "Username already taken" });
    }
    //Hash password here
    const salt = await bcrypt.genSalt(10); //higher the better but slower
    const hashedPassword = await bcrypt.hash(password, salt);

    //random profile picture : 
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy/?username=̥${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl/?username=̥${username}`;
    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
    //generate jwt token
    generateTokenAndSetCookie(newUser._id,res)
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        userName: newUser.username,
        profilePic: newUser.profile,
      });

    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("We got an error: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = async(req, res) => {
  try {
    const {username,password}=req.body
    const user=await User.findOne({username})
    const isPassword=await bcrypt.compare(password,user?.password || "")
    if(!user || !isPassword){
      return res.status(400).json({error:"Invalid Credentials"})
    }
    generateTokenAndSetCookie(user._id,res)
    res.status(201).json({
        _id:user._id,
        fullname:user.fullname,
        username:user.username,
        profilePic:user.profilePic

    })
  } catch (error) {
    console.log("Error in login controller",error.message)
    res.status(500).json({error:"Internal Server Error"})
  }
};
export const logout = (req, res) => {
  try {
        res.cookie('jwt','',{maxAge:0})
        res.status(200).json({msg:"Logged out successfully"})
  } catch (error) {
        console.log("Error in logout controller",error.message)
        res.status(500).json({error:"Internal Server Error"})
  }
};
