import AdvancedBanglaWord from '../models/AdvancedWords/AdvancedBanglaWords.js';

export const addAdvancedBanglaWord = async (req, res) => {
  const { AdvancedBanglaWordList } = req.body;
  try {
    const newAdvancedBanglaWord = await AdvancedBanglaWord.insertMany(AdvancedBanglaWordList);
    return res.status(201).json({ message: "AdvancedBanglaWords added successfully" });
  } catch (error) {
    console.error("Error adding AdvancedBanglaWord: ", error);
    return res.status(500).json({ error: "Error adding AdvancedBanglaWords" });
  }
};

// Update getAllAdvancedBanglaWords to not take req, res
export const getAllAdvancedBanglaWords = async () => {
  try {
    const allAdvancedBanglaWords = await AdvancedBanglaWord.find().select(["-__v"]);
    return allAdvancedBanglaWords; // Return the fetched AdvancedBanglaWords
  } catch (error) {
    console.error("Error getting AdvancedBanglaWords:", error);
    throw error; // Rethrow to be caught by the caller
  }
};
