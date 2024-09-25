// models/AdvancedBanglaWords.js

import mongoose from "mongoose";

const AdvancedBanglaWordsSchema = new mongoose.Schema({
  AdvancedBanglaWords: {
    type: String,
    required: true,
    unique: true,
  },
  sentencemeaning: {
    type: String,
    required: true,
  },
  sentence: {
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

const AdvancedBanglaWords = mongoose.model("AdvancedBanglaWords", AdvancedBanglaWordsSchema);

export default AdvancedBanglaWords;