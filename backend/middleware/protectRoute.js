import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protectRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt
        if(!token){
            return res.status(401).json({message:"Unauthorized Access No Token Provided"})
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({message:"Unauthorized Access Invalid Token"})
        }
        const user=await User.findById(decoded.UserId).select('-password')
        if(!user){
            return res.status(401).json({message:"No User Found"})
        }
        req.user=user
        next()
    } catch (error) {
        console.log("Error in protectRoute middleware:",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}

export default protectRoute
