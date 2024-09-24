// models/Word.js

import mongoose from "mongoose";

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Word = mongoose.model("Word", WordSchema);

export default Word;