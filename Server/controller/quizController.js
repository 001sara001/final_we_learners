import Question from '../models/questions.js'; 
import Result from '../models/result.js'
// Get questions based on language
export const getQuestions = async (req, res) => {
    
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve questions", error });
    }
};
// level
// export const QuizLevel = async (req, res) => {
//     const { level } = req.params;
//     try {
//         const questions = await Question.find({ level });
//         if (!questions.length) {
//             return res.status(404).json({ message: "No questions found for this level" });
//         }
//         res.json(questions);
//     } catch (error) {
//         res.status(500).json({ message: "Failed to retrieve questions", error });
//     }
// };


// Add a new question
export const addQuestion = async (req, res) => {
    const { language, question, options, correctAnswer } = req.body; 
    if (!language || !question || !options || !correctAnswer) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newQuestion = new Question({ language, question, options, correctAnswer });
        await newQuestion.save();
        res.status(201).json({ message: "Question added successfully", question: newQuestion });
    } catch (error) {
        res.status(500).json({ message: "Failed to add question", error });
    }
};
// Get all results
export const getResult = async (req, res) => {
    try {
        const results = await Result.find();
        res.json(results);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Store result
export const storeResult = async (req, res) => {
    try {
        const { result, attempts, points, achieved } = req.body; // Corrected spelling of 'achieved'
        if (!result || !attempts) {
            return res.status(400).json({ message: 'Data Not Provided...!' });
        }

        const newResult = new Result({ result, attempts, points, achieved });
        await newResult.save();
        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Delete all results
export const dropResult = async (req, res) => {
    try {
        await Result.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export default {
    addQuestion,
    getQuestions,

    getResult,
    storeResult,
    dropResult
};