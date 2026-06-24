import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "../src/lib/db.js";

dotenv.config({
  path: ".env.test",
});

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});