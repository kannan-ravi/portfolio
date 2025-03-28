import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import connectDB from "./server/config/dbConn.js";
import homeRouter from "./server/routes/home.route.js";
import authRouter from "./server/routes/auth.route.js";
import contactAttemptRouter from "./server/routes/contact-attempt.route.js";
import profileRouter from "./server/routes/profile.route.js";
import skillRouter from "./server/routes/skill.route.js";
import experienceRouter from "./server/routes/experience.route.js";
import errorHandler from "./server/middleware/dataHandler.js";
import path from "path";
dotenv.config();

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
connectDB();

app.use(express.static("./server/public"));

app.use("/api/home", homeRouter);
app.use("/api/auth", authRouter);
app.use("/api/contact-attempt", contactAttemptRouter);
app.use("/api/profile", profileRouter);
app.use("/api/skill", skillRouter);
app.use("/api/experience", experienceRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(process.cwd(), "client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "client/dist", "index.html"));
});

app.use(errorHandler.defaultErrorHandle);

// if (require.main === module) {
//   mongoose.connection.once("open", () => {
//     console.log("MongoDB database connection established successfully");
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     });
//   });
// }

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

export default app;
