import express from "express";
import authController from "../controller/auth.controller.js";

const router = express.Router();

router.route("/login").post(authController.loginController);
// router.route("/register").post(authController.registerController);
router.route("/logout").get(authController.logoutController);
export default router;
