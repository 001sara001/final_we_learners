import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    language: { type: String, required: true }, // Language of the question
    question: { type: String, required: true },
    options: { type: [String], required: true },
    correctAnswer: { type: String, required: true },
    
  });
const Question = mongoose.model('Question', questionSchema);

export default Question;
