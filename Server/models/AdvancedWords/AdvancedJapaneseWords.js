// models/AdvancedJapaneseWords.js

import mongoose from "mongoose";

const AdvancedJapaneseWordsSchema = new mongoose.Schema({
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

const AdvancedJapaneseWords = mongoose.model("AdvancedJapaneseWords", AdvancedJapaneseWordsSchema);

export default AdvancedJapaneseWords;