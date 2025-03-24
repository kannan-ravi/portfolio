import { Router } from "express";
import verifyJWT from "../middleware/verifyJWT.js";
import experienceController from "../controller/experience.controller.js";

const router = Router();

router
  .route("/")
  .get(verifyJWT, experienceController.getExperience)
  .post(verifyJWT, experienceController.createExperience);

export default router;
