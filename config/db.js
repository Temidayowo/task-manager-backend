import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbPassword = process.env.DATABASE_PASSWORD;
const dbUrl = process.env.DATABASE_URL.replace("<db_password>", dbPassword);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUrl);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;