// models/TurkishWord.js

import mongoose from "mongoose";

const TurkishWordSchema = new mongoose.Schema({
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

const TurkishWord = mongoose.model("TurkishWord", TurkishWordSchema);

export default TurkishWord;