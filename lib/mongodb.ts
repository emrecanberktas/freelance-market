import mongoose from "mongoose";

export const connectMongoDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("DB Connected");
  } catch (error) {
    throw new Error("Failed to connect DB");
  }
};
