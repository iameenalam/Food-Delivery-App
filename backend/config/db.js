import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  await mongoose.connect(uri)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.error("Database Connection Error:", err));
};
