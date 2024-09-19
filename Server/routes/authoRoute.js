import express from "express";
import cors from "cors";
import authoController from "../controller/authoController.js";
import mongoose from "mongoose";

const router = express.Router();

// Middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173"
  })
);

router.get("/", (req, res) => {
  res.send("Hello from route");
});

router.post("/login", authoController.loginUser);
router.post("/register", authoController.registerUser);
export default router;