import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kendyluu810:Lkendy0911@cluster0.xdxlmw4.mongodb.net/"
  );
  console.log("MongoDB connected successfully");
};
