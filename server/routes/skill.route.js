import express from "express";
import skillController from "../controller/skill.controller.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

router
  .route("/")
  .post(verifyJWT, skillController.createSkill)
  .get(skillController.getAllSkills);

router
  .route("/:id")
  .get(skillController.getSkill)
  .put(verifyJWT, skillController.updateSkill)
  .delete(verifyJWT, skillController.deleteSkill);

export default router;
