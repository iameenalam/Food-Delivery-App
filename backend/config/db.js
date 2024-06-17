import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ameenalam98:aacricket@cluster0.09i1vxl.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}