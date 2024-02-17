import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URI, {
      dbName: "portfolio",
    });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
