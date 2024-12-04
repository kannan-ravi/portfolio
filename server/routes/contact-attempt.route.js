import express from "express";
import contactAttemptController from "../controller/contact-attempt.controller.js";

const router = express.Router();

router
  .route("/")
  .get(contactAttemptController.getAllContactAttempt)
  .post(contactAttemptController.saveContactAttempt);

router
  .route("/:id")
  .get(contactAttemptController.getSingleContactAttempt)
  .delete(contactAttemptController.deleteContactAttempt);

export default router;
