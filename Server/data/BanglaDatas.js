import BanglaWords from "../models/Words/BanglaWords.js";

export const addBanglaWords = async (req, res) => {
  const { BanglaWordsList } = req.body;
  try {
    const newBanglaWords = await BanglaWords.insertMany(BanglaWordsList);
    return res.status(201).json({ message: "BanglaWords added successfully" });
  } catch (error) {
    console.error("Error adding BanglaWords: ", error);
    return res.status(500).json({ error: "Error adding BanglaWords" });
  }
};

// Update getAllBanglaWords to not take req, res
export const getAllBanglaWords = async () => {
  try {
    const allBanglaWords = await BanglaWords.find().select(["-__v"]);
    return allBanglaWords; // Return the fetched BanglaWords
  } catch (error) {
    console.error("Error getting BanglaWords:", error);
    throw error; // Rethrow to be caught by the caller
  }
};
