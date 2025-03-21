import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected");
  } catch (err: any) {
    console.error(`Database connection failed, ${JSON.stringify(err)}`);
    process.exit(1);
  }
};
