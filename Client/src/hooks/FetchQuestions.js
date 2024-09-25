import { useEffect, useState } from "react";
import data, { answers } from "../Database/question_data";
import { useDispatch } from "react-redux";
import * as Action from "../redux/ques_redx";
import axios from "axios";
import { getServerData } from "../helper/helper";

export const useFetchQuestion = () => {
  const disptach = useDispatch();
  const [getData, setGetData] = useState({
    isloading: false,
    apiData: [],
    serverError: null,
  });
  useEffect(() => {
    setGetData((prev) => ({ ...prev, isloading: true }));

    (async () => {
      try {
        //const question = await data;
        //asnc function backend data
        const question = await getServerData(
          `http://localhost:8000/auth/quiz/start`,
          (data) => data
        );

        console.log(question);
        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isloading: false }));
          setGetData((prev) => ({ ...prev, apiData: { question, answers } }));

          //dispatch ques
          disptach(Action.startExamAction({ question, answers }));
        } else {
          throw new Error("No question available");
        }
      } catch(err) {
        console.log(err);
        setGetData((prev) => ({ ...prev, isloading: false }));
        setGetData((prev) => ({ ...prev, serverError: err }));
      }
    })();
  }, {disptach});
  return [getData, setGetData];
};

// moveNextAction Dispatch function
export const moveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (err) {
    console.log(err);
  }
};
// movePrevAction Dispatch function
export const movePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (err) {
    console.log(err);
  }
};
