import express from "express";
import contactAttemptController from "../controller/contact-attempt.controller.js";

const router = express.Router();

router
  .route("/contact-attempt")
  .get(contactAttemptController.getContactAttempt)
  .post(contactAttemptController.saveContactAttempt);

export default router;
