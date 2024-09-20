// fetch ques hook to api data and set value to store

import { useEffect, useState } from "react"
import data from "../Database/question_data"
import { useDispatch } from "react-redux"
import *as Action from '../redux/ques_redx'

export const useFetchQuestion = ()=>{
    const disptach = useDispatch()
    const [getData, setGetData] =useState(
        {
            isloading: false,
            apiData: [],
            serverError: null
        }
    )
    useEffect(()=>{
        setGetData(prev=>({...prev,isloading: true}));

        //asnc function backend data
         (async()=>{
            try{
                let question = await data;

                if(question.length>0)
                {
                    setGetData(prev=>({...prev,isloading: false}));
                    setGetData(prev=>({...prev,apiData: question}));

                    //dispatch ques
                    disptach(Action.startExamAction(question))
                }else{
                    throw new Error("No question available");
                }
            }catch(err){
                setGetData(prev=>({...prev,isloading: false}));
                setGetData(prev=>({...prev,serverError: err}));
            }

         })();
        }, {disptach})
        return [getData, setGetData];
}

// moveNextAction Dispatch function
export const moveNextQuestion = ()=> async(dispatch)=>{
    try {
        dispatch(Action.moveNextAction())
    } catch (err) {
        console.log(err)
        
    }
}
// movePrevAction Dispatch function
export const movePrevQuestion = ()=> async(dispatch)=>{
    try {
        dispatch(Action.movePrevAction())
    } catch (err) {
        console.log(err)
        
    }
}
