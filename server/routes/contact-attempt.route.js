import express from "express";
import contactAttemptController from "../controller/contact-attempt.controller.js";

const router = express.Router();

router
  .route("/contact-attempt")
  .post(contactAttemptController.saveContactAttemptController);

export default router;
