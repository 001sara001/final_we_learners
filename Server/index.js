import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authoRoute.js";
import { addWord, getAllWords } from "./data/EnglishData.js";
import { addKoreanWord, getAllKoreanWords } from "./data/KoreanData.js";
import { addTurkishWord, getAllTurkishWords } from "./data/TurkishData.js";
import { addJapaneseWord, getAllJapaneseWords } from "./data/JapaneseData.js"; 

// Middleware
dotenv.config();
const app = express();
const port = 8000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173"
  })
);

// Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database is Connected"))
  .catch((err) => console.log("Database not connected", err));

// Routes
app.use("/auth", authRoute);
app.use("/auth/user", userRoute);

// English words routes
app.post("/words", addWord);
app.get("/words", async (req, res) => {
  try {
    const words = await getAllWords();
    return res.status(200).json(words); // Use 200 for successful fetch
  } catch (error) {
    console.error("Error getting words:", error);
    return res.status(500).json({ error: "Failed to fetch words" }); // Use 500 for server error
  }
});

// Korean words routes
app.post("/korean-words", addKoreanWord);
app.get("/korean-words", async (req, res) => {
  try {
    const koreanWords = await getAllKoreanWords();
    return res.status(200).json(koreanWords);
  } catch (error) {
    console.error("Error getting Korean words:", error);
    return res.status(500).json({ error: "Failed to fetch Korean words" });
  }
});

// Turkish words routes
app.post("/turkish-words", addTurkishWord);
app.get("/turkish-words", async (req, res) => {
  try {
    const turkishWords = await getAllTurkishWords();
    return res.status(200).json(turkishWords);
  } catch (error) {
    console.error("Error getting Turkish words:", error);
    return res.status(500).json({ error: "Failed to fetch Turkish words" });
  }
});

// Japanese words routes
app.post("/japanese-words", addJapaneseWord);
app.get("/japanese-words", async (req, res) => {
  try {
    const japaneseWords = await getAllJapaneseWords();
    return res.status(200).json(japaneseWords);
  } catch (error) {
    console.error("Error getting Japanese words:", error);
    return res.status(500).json({ error: "Failed to fetch Japanese words" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
