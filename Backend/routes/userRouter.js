import { loginUser, registerUser, adminLogin } from "../controllers/user.js";
import express from "express";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/admin", adminLogin)

export default router;