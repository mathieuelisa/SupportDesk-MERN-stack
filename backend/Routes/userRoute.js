import express from "express";
const router = express.Router();

import userController from "../Controllers/userController.js";
import { protect } from "../Middlewares/authMiddleware.js";

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user", protect, userController.getUserInfos);

export default router;
