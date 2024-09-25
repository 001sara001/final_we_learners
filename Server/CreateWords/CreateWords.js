import Words from "../models/words.js"
export const createWords=async(req,res)=>{

    const {word}=req.body;
    const newWord=await Words.create({word});
    return res.status(201).json(newWord);
}

export const getAllWords=async(req,res)=>{
    //const allWords=await Words.find();
    const allWords=await Words.find().select(["-__v"]);
    return res.status(200).json(allWords);
}