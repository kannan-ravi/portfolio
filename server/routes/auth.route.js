import express from "express";
import authController from "../controller/auth.controller.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

router.route("/login").post(authController.login);
router.route("/password-change").patch(verifyJWT ,authController.passwordChange);
router.route("/logout").post(authController.logout);
export default router;
