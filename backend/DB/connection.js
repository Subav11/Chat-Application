import mongoose from "mongoose";
const connectMongoDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connection to database is successful")
    } catch (error) {
        console.log("Error connecting to database: ",error.message)
    }
}
export default connectMongoDb