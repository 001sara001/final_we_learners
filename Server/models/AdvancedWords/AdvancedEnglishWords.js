// models/AdvancedEnglishWords.js

import mongoose from "mongoose";

const AdvancedEnglishWordsSchema = new mongoose.Schema({
  AdvancedEnglishWords: {
    type: String,
    required: true,
    unique: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  sentence: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AdvancedEnglishWords = mongoose.model("AdvancedEnglishWords", AdvancedEnglishWordsSchema);

export default AdvancedEnglishWords;
