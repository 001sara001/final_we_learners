import jwt from 'jsonwebtoken';

import User from '../../models/user.js';


export const authenticate = async (req,res,next)=>{

    //get token from header
    const authToken = req.headers.authorization

    //check if the token exists
    if(!authToken){
        return res.status(401).json({success:false, message:"No token, auth denied"})

    }

    try {

        const token = authToken.split(' ')[1];

        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId = decoded.userId

        next();
    }catch(e){
        if (e.name === 'TokenExpiredError'){
            return res.status (401).json({message:'Token is expired'})
        }

        return req.status(401).json({success:false, message:'Invalid Token'})
    }

};