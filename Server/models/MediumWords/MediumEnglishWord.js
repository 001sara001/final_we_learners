// models/MediumEnglishWord.js

import mongoose from "mongoose";

const MediumEnglishWordSchema = new mongoose.Schema({
  MediumEnglishWord: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MediumEnglishWord = mongoose.model("MediumEnglishWord", MediumEnglishWordSchema);

export default MediumEnglishWord;
