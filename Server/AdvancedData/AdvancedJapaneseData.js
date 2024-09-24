import AdvancedJapaneseWord from '../models/AdvancedWords/AdvancedJapaneseWords.js';

export const addAdvancedJapaneseWord = async (req, res) => {
  const { AdvancedJapaneseWordList } = req.body;

  // Validate input
  if (!Array.isArray(AdvancedJapaneseWordList) || AdvancedJapaneseWordList.length === 0) {
    return res.status(400).json({ error: "AdvancedJapaneseWordList must be a non-empty array." });
  }

  try {
    const newAdvancedJapaneseWords = await AdvancedJapaneseWord.insertMany(AdvancedJapaneseWordList);
    return res.status(201).json({ 
      message: "Advanced Japanese words added successfully", 
      addedWords: newAdvancedJapaneseWords // Optionally return the added words
    });
  } catch (error) {
    console.error("Error adding AdvancedJapaneseWord: ", error);
    return res.status(500).json({ error: "Error adding Advanced Japanese words" });
  }
};

// Update getAllAdvancedJapaneseWords to not take req, res
export const getAllAdvancedJapaneseWords = async () => {
  try {
    const allAdvancedJapaneseWords = await AdvancedJapaneseWord.find().select(["-__v"]);
    return allAdvancedJapaneseWords; // Return the fetched AdvancedJapaneseWords
  } catch (error) {
    console.error("Error getting AdvancedJapaneseWords:", error);
    throw error; // Rethrow to be caught by the caller
  }
};
