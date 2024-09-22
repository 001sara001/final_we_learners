// models/BanglaWords.js

import mongoose from "mongoose";

const BanglaWordsSchema = new mongoose.Schema({
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

const BanglaWords = mongoose.model("BanglaWords", BanglaWordsSchema);

export default BanglaWords;
