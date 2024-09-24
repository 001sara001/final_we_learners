// models/JapaneseWord.js

import mongoose from "mongoose";

const JapaneseWordSchema = new mongoose.Schema({
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

const JapaneseWord = mongoose.model("JapaneseWord", JapaneseWordSchema);

export default JapaneseWord;