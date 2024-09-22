// import BanglaWord from "../models/Words/BanglaWord.js";

// export const addBanglaWord = async (req, res) => {
//   const { BanglaWordList } = req.body;
//   try {
//     const newBanglaWord = await BanglaWord.insertMany(BanglaWordList);
//     return res.status(201).json({ message: "BanglaWords added successfully" });
//   } catch (error) {
//     console.error("Error adding BanglaWord: ", error);
//     return res.status(500).json({ error: "Error adding BanglaWords" });
//   }
// };

// // Update getAllBanglaWords to not take req, res
// export const getAllBanglaWords = async () => {
//   try {
//     const allBanglaWords = await BanglaWord.find().select(["-__v"]);
//     return allBanglaWords; // Return the fetched BanglaWords
//   } catch (error) {
//     console.error("Error getting BanglaWords:", error);
//     throw error; // Rethrow to be caught by the caller
//   }
// };
