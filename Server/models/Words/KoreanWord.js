// models/KoreanWord.js

import mongoose from "mongoose";

const KoreanWordSchema = new mongoose.Schema({
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

const KoreanWord = mongoose.model("KoreanWord", KoreanWordSchema);

export default KoreanWord;