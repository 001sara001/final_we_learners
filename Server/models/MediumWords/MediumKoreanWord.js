// models/MediumKoreanWord.js

import mongoose from "mongoose";

const MediumKoreanWordSchema = new mongoose.Schema({
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

const MediumKoreanWord = mongoose.model("MediumKoreanWord", MediumKoreanWordSchema);

export default MediumKoreanWord;