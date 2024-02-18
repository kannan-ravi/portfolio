import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import connectDB from "./server/config/dbConn.js";
import authRouter from "./server/routes/auth.route.js";
import errorHandler from "./server/middleware/dataHandler.js";
dotenv.config();

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
connectDB();

app.get("/", (req, res) => {
  res.send("Please check the api route for the data");
});

app.use("/api/auth", authRouter);

app.use(errorHandler.defaultErrorHandle);
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
