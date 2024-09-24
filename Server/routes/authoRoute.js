// routes.js
import express from "express";
import cors from "cors";
import authoController from "../controller/authoController.js";
import quizController from "../controller/quizController.js"; // Correct import

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
router.post('/forgot-password', authoController.forgotPassword);

// Quiz routes
router.get('/quiz/start', quizController.getQuestions); // Updated route to get all questions
router.post('/quiz/add', quizController.addQuestion);
router.get("/result", quizController.getResult);
router.post("/result", quizController.storeResult);
router.delete("/result", quizController.dropResult);

export default router;
