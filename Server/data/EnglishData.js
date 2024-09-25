import Word from "../models/Words/EnglishWord.js";

export const addWord = async (req, res) => {
  const { wordList } = req.body;
  try {
    const newWord = await Word.insertMany(wordList);
    return res.status(201).json({ message: "Words added successfully" });
  } catch (error) {
    console.error("Error adding word: ", error);
    return res.status(500).json({ error: "Error adding words" });
  }
};

// Update getAllWords to not take req, res
export const getAllWords = async () => {
  try {
    const allWords = await Word.find().select(["-__v"]);
    return allWords; // Return the fetched words
  } catch (error) {
    console.error("Error getting words:", error);
    throw error; // Rethrow to be caught by the caller
  }
};
