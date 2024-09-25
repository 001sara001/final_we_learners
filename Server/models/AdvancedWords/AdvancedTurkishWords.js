// models/AdvancedTurkishWords.js

import mongoose from "mongoose";

const AdvancedTurkishWordsSchema = new mongoose.Schema({
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

const AdvancedTurkishWords = mongoose.model("AdvancedTurkishWords", AdvancedTurkishWordsSchema);

export default AdvancedTurkishWords;