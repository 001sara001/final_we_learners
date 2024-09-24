import AdvancedKoreanWord from '../models/AdvancedWords/AdvancedKoreanWords.js';


export const addAdvancedKoreanWord = async (req, res) => {
  const { AdvancedKoreanWordList } = req.body;
  try {
    const newAdvancedKoreanWord = await AdvancedKoreanWord.insertMany(AdvancedKoreanWordList);
    return res.status(201).json({ message: "AdvancedKoreanWords added successfully" });
  } catch (error) {
    console.error("Error adding AdvancedKoreanWord: ", error);
    return res.status(500).json({ error: "Error adding AdvancedKoreanWords" });
  }
};

// Update getAllAdvancedKoreanWords to not take req, res
export const getAllAdvancedKoreanWords = async () => {
  try {
    const allAdvancedKoreanWords = await AdvancedKoreanWord.find().select(["-__v"]);
    return allAdvancedKoreanWords; // Return the fetched AdvancedKoreanWords
  } catch (error) {
    console.error("Error getting AdvancedKoreanWords:", error);
    throw error; // Rethrow to be caught by the caller
  }
};
