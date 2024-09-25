// models/MediumTurkishWord.js

import mongoose from "mongoose";

const MediumTurkishWordSchema = new mongoose.Schema({
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

const MediumTurkishWord = mongoose.model("MediumTurkishWord", MediumTurkishWordSchema);

export default MediumTurkishWord;