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
import { addBanglaWords, getAllBanglaWords } from "./data/BanglaDatas.js"; 

import {addAdvancedKoreanWord,getAllAdvancedKoreanWords} from "./AdvancedData/AdvancedKoreanData.js";
import { addAdvancedBanglaWord,getAllAdvancedBanglaWords } from "./AdvancedData/AdvancedBanglaData.js";
import { addAdvancedJapaneseWord,getAllAdvancedJapaneseWords } from "./AdvancedData/AdvancedJapaneseData.js";
import{addAdvancedTurkishWord,getAllAdvancedTurkishWords} from "./AdvancedData/AdvancedTurkishData.js";
import {addAdvancedEnglishWord,getAllAdvancedEnglishWords} from "./AdvancedData/AdvancedEnglishData.js"
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


app.post("/bangla-words", addBanglaWords);
app.get("/bangla-words", async (req, res) => {
  try {
    const banglaWords = await getAllBanglaWords();
    return res.status(200).json(banglaWords);
  } catch (error) {
    console.error("Error getting bangla words:", error);
    return res.status(500).json({ error: "Failed to fetch bangla words" });
  }
});


app.post("/advanced-bangla-words", addAdvancedBanglaWord);
app.get("/advanced-bangla-words", async (req, res) => {
  try {
    const banglaWords = await getAllAdvancedBanglaWords();
    return res.status(200).json(banglaWords);
  } catch (error) {
    console.error("Error getting advanced bangla words:", error);
    return res.status(500).json({ error: "Failed to fetch advanced bangla words" });
  }
});


app.post("/advanced-english-words", addAdvancedEnglishWord);
app.get("/advanced-english-words", async (req, res) => {
  try {
    const englishWords = await getAllAdvancedEnglishWords();
    return res.status(200).json(englishWords);
  } catch (error) {
    console.error("Error getting advanced english words:", error);
    return res.status(500).json({ error: "Failed to fetch advanced english words" });
  }
});


app.post("/advanced-korean-words", addAdvancedKoreanWord);
app.get("/advanced-korean-words", async (req, res) => {
  try {
    const koreanWords = await getAllAdvancedKoreanWords();
    return res.status(200).json(koreanWords);
  } catch (error) {
    console.error("Error getting advanced korean words:", error);
    return res.status(500).json({ error: "Failed to fetch advanced korean words" });
  }
});
app.post("/advanced-turkish-words", addAdvancedTurkishWord);
app.get("/advanced-turkish-words", async (req, res) => {
  try {
    const turkishWords = await getAllAdvancedTurkishWords();
    return res.status(200).json(turkishWords);
  } catch (error) {
    console.error("Error getting advanced turkish words:", error);
    return res.status(500).json({ error: "Failed to fetch advanced turkish words" });
  }
});

app.post("/advanced-japanese-words", addAdvancedJapaneseWord);
app.get("/advanced-japanese-words", async (req, res) => {
  try {
    const japaneseWords = await getAllAdvancedJapaneseWords();
    return res.status(200).json(japaneseWords);
  } catch (error) {
    console.error("Error getting advanced japanese words:", error);
    return res.status(500).json({ error: "Failed to fetch advanced japanese words" });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
