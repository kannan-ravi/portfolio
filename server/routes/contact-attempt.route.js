import express from "express";
import contactAttemptController from "../controller/contact-attempt.controller.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

router
  .route("/")
  .get(verifyJWT, contactAttemptController.getAllContactAttempt)
  .post(contactAttemptController.saveContactAttempt);

router
  .route("/:id")
  .get(verifyJWT, contactAttemptController.getSingleContactAttempt)
  .delete(verifyJWT, contactAttemptController.deleteContactAttempt);

export default router;
