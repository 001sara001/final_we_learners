// models/BanglaWord.js

import mongoose from "mongoose";

const BanglaWordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    unique: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BanglaWord = mongoose.model("BanglaWord", BanglaWordSchema);

export default BanglaWord;