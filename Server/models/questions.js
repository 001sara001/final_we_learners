import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [optionSchema],
    answerIndex: {
        type: Number,
        required: true
    }
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
