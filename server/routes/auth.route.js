import express from "express";
import authController from "../controller/auth.controller.js";

const router = express.Router();

router.route("/login").post(authController.login);
router.route("/logout").post(authController.logout);
export default router;
