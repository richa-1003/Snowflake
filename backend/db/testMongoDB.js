import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load your .env file

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("✅ Successfully connected to MongoDB!");
    process.exit(0); // exit after success
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // exit after failure
  }
};

testConnection();