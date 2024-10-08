// import {useSelector} from "react-redux"
// import {Navgate} from "react-router-dom"
 import axios from "axios"

export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
};

export function earnPoints_Number(result, answers , points){
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => points).reduce((prev, curr) => prev + curr, 0);
};

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 50 / 100) < earnPoints; 
}

//get server from backend
export async function getServerData(url, callback) {
    const data = await (await axios.get(url))?.data;
    return callback?callback(data):data;
    
}


/// post data to server
export async function postServerData(url,result, callback) {
    const data = await (await axios.post(url, result))?.data;
    return callback?callback(data):data;
}
