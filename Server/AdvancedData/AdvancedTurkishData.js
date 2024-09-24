import AdvancedTurkishWord from '../models/AdvancedWords/AdvancedTurkishWords.js';

export const addAdvancedTurkishWord = async (req, res) => {
  const { AdvancedTurkishWordList } = req.body;
  try {
    const newAdvancedTurkishWord = await AdvancedTurkishWord.insertMany(AdvancedTurkishWordList);
    return res.status(201).json({ message: "AdvancedTurkishWords added successfully" });
  } catch (error) {
    console.error("Error adding AdvancedTurkishWord: ", error);
    return res.status(500).json({ error: "Error adding AdvancedTurkishWords" });
  }
};

// Update getAllAdvancedTurkishWords to not take req, res
export const getAllAdvancedTurkishWords = async () => {
  try {
    const allAdvancedTurkishWords = await AdvancedTurkishWord.find().select(["-__v"]);
    return allAdvancedTurkishWords; // Return the fetched AdvancedTurkishWords
  } catch (error) {
    console.error("Error getting AdvancedTurkishWords:", error);
    throw error; // Rethrow to be caught by the caller
  }
};
