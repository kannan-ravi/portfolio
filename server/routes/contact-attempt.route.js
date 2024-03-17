import express from "express";
import contactAttemptController from "../controller/contact-attempt.controller.js";

const router = express.Router();

router
  .route("/contact-attempt")
  .get(contactAttemptController.getAllContactAttempt)
  .post(contactAttemptController.saveContactAttempt);

router
  .route("/contact-attempt/:id")
  .delete(contactAttemptController.deleteContactAttempt);
router
  .route("/contact-attempt/:id")
  .get(contactAttemptController.getSingleContactAttempt);

export default router;
