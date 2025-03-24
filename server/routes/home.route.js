import express from "express";
import homeController from "../controller/home.controller.js";

const router = express.Router();

router.route("/").get(homeController.getHomeData);

export default router;
