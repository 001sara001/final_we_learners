import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
  });
const result = mongoose.model('Result', resultSchema);

export default result;