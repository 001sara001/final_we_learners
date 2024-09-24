// models/AdvancedKoreanWords.js

import mongoose from "mongoose";

const AdvancedKoreanWordsSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    unique: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  pronunciation: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AdvancedKoreanWords = mongoose.model("AdvancedKoreanWords", AdvancedKoreanWordsSchema);

export default AdvancedKoreanWords;