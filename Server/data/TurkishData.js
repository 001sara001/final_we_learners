import TurkishWord from "../models/Words/TurkishWord.js";

export const addTurkishWord = async (req, res) => {
  const { TurkishWordList } = req.body;
  try {
    const newTurkishWord = await TurkishWord.insertMany(TurkishWordList);
    return res.status(201).json({ message: "TurkishWords added successfully" });
  } catch (error) {
    console.error("Error adding TurkishWord: ", error);
    return res.status(500).json({ error: "Error adding TurkishWords" });
  }
};

// Update getAllTurkishWords to not take req, res
export const getAllTurkishWords = async () => {
  try {
    const allTurkishWords = await TurkishWord.find().select(["-__v"]);
    return allTurkishWords; // Return the fetched TurkishWords
  } catch (error) {
    console.error("Error getting TurkishWords:", error);
    throw error; // Rethrow to be caught by the caller
  }
};
