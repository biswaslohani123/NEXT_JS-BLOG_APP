import mongoose from "mongoose";

const connectDB = async () => {

    await mongoose.connect("mongodb+srv://lohanibiswas1_db_user:biswas@cluster0.8rfyakh.mongodb.net/blog-app")
    console.log("DB Connected");
    

}
export default connectDB;