import AdvancedEnglishWord from '../models/AdvancedWords/AdvancedEnglishWords.js';

export const addAdvancedEnglishWord = async (req, res) => {
  const { AdvancedEnglishWordList } = req.body;
  try {
    const newAdvancedEnglishWord = await AdvancedEnglishWord.insertMany(AdvancedEnglishWordList);
    return res.status(201).json({ message: "AdvancedEnglishWords added successfully" });
  } catch (error) {
    console.error("Error adding AdvancedEnglishWord: ", error);
    return res.status(500).json({ error: "Error adding AdvancedEnglishWords" });
  }
};

// Update getAllAdvancedEnglishWords to not take req, res
export const getAllAdvancedEnglishWords = async () => {
  try {
    const allAdvancedEnglishWords = await AdvancedEnglishWord.find().select(["-__v"]);
    return allAdvancedEnglishWords; // Return the fetched AdvancedEnglishWords
  } catch (error) {
    console.error("Error getting AdvancedEnglishWords:", error);
    throw error; // Rethrow to be caught by the caller
  }
};
