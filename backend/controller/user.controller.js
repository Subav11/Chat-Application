import User from '../models/userModel.js'

export const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id
        const allUser=await User.find({_id:{$ne:loggedInUserId}}).select("-password") //except the logged in user
        
        res.status(200).json(allUser)
        
    } catch (error) {
        console.log("Error in getUsersForSidebar controller:",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}