import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ansh:ansh123@cluster0.6v3sjxb.mongodb.net/restaurant?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;