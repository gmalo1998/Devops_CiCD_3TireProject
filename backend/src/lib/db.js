import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error(
        "MONGODB_URI environment variable is required"
      );
    }

    const conn = await mongoose.connect(
      process.env.MONGODB_URI,
      {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      }
    );

    console.log(
      `MongoDB connected: ${conn.connection.host}`
    );

    return conn;

  } catch (error) {

    console.log(
      "MongoDB connection error:",
      error.message
    );

    // Stop server only outside tests
    if (
      process.env.NODE_ENV !== "test"
    ) {
      process.exit(1);
    }

    // Allow Jest to handle failure
    throw error;
  }
};