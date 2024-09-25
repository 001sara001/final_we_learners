// models/MediumBanglaWord.js

import mongoose from "mongoose";

const MediumBanglaWordSchema = new mongoose.Schema({
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

const MediumBanglaWord = mongoose.model("MediumBanglaWord", MediumBanglaWordSchema);

export default MediumBanglaWord;