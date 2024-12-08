import express from "express";
import profileContoller from "../controller/profile.contoller.js";
import verifyJWT from "../middleware/verifyJWT.js";
import fileHandler from "../middleware/fileHandler.js";

const router = express.Router();

const listOfFields = [
  { name: "logo", maxCount: 1 },
  { name: "profile_pic", maxCount: 1 },
];

router
  .route("/")
  .patch(
    verifyJWT,
    fileHandler.upload.fields(listOfFields),
    profileContoller.updateProfile
  );

export default router;
