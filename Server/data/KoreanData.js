import KoreanWord from "../models/Words/KoreanWord.js";

export const addKoreanWord = async (req, res) => {
  const { KoreanWordList } = req.body;
  try {
    const newKoreanWord = await KoreanWord.insertMany(KoreanWordList);
    return res.status(201).json({ message: "KoreanWords added successfully" });
  } catch (error) {
    console.error("Error adding KoreanWord: ", error);
    return res.status(500).json({ error: "Error adding KoreanWords" });
  }
};

// Update getAllKoreanWords to not take req, res
export const getAllKoreanWords = async () => {
  try {
    const allKoreanWords = await KoreanWord.find().select(["-__v"]);
    return allKoreanWords; // Return the fetched KoreanWords
  } catch (error) {
    console.error("Error getting KoreanWords:", error);
    throw error; // Rethrow to be caught by the caller
  }
};
