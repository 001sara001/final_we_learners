// // routes/enroll.js
// import express from 'express';

// import { authenticate } from '../auth/verifyToken.js'; // Middleware to verify user

// const router = express.Router();

// // Store Learning Value
// router.post('/store-learning', authenticate, async (req, res) => {
//     const { learningValue } = req.body;
//     const userId = req.user.id; // Assuming `req.user` is populated by your auth middleware
//     const userName = req.user.name; // Adjust according to your user model

//     try {
//         const newLearning = new Learning({
//             userId,
//             learningValue,
//             userName,
//         });

//         await newLearning.save();
//         res.status(201).json({ success: true, message: 'Learning value stored successfully!' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Failed to store learning value.' });
//     }
// });

// export default router;
