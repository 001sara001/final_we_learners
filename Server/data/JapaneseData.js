import JapaneseWord from "../models/Words/JapaneseWord.js";

export const addJapaneseWord = async (req, res) => {
  const { JapaneseWordList } = req.body;
  try {
    const newJapaneseWord = await JapaneseWord.insertMany(JapaneseWordList);
    return res.status(201).json({ message: "JapaneseWords added successfully" });
  } catch (error) {
    console.error("Error adding JapaneseWord: ", error);
    return res.status(500).json({ error: "Error adding JapaneseWords" });
  }
};

// Update getAllJapaneseWords to not take req, res
export const getAllJapaneseWords = async () => {
  try {
    const allJapaneseWords = await JapaneseWord.find().select(["-__v"]);
    return allJapaneseWords; // Return the fetched JapaneseWords
  } catch (error) {
    console.error("Error getting JapaneseWords:", error);
    throw error; // Rethrow to be caught by the caller
  }
};
