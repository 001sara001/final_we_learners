import React, { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';


import { resetResultAction } from '../redux/res_redx';
import { resetAllAction } from '../redux/ques_redx';
import { attempts_Number, earnPoints_Number , flagResult } from '../helper/helper';
export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const dispatch = useDispatch()
  const {questions : {queue, answers}, result:{result}}=useSelector(state=>state)

  // Get the current level from URL query parameters
  const searchParams = new URLSearchParams(location.search);
  const currentLevel = parseInt(searchParams.get('level')) || 1;

  useEffect(()=>{
    console.log(flag)
  })
  
  

  function goToNextLevel() {
    // Calculate the next level and redirect
    const nextLevel = currentLevel + 1;
    navigate(`/quiz/start?level=${nextLevel}`);
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  const totalPoints = queue.length * 10;
  const attemps= attempts_Number(result);
  const earnPoints = earnPoints_Number( result , answers, 10);
  const flag = flagResult(totalPoints, earnPoints)
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]">
      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <div className="container bg-tranparent p-8 rounded-lg shadow-md">
          <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
            Quiz Result
          </h1>
          {/* <div className="flex justify-between my-4">
            <span className="font-medium">{userId}</span>
            <span className="font-bold">Daily Task</span>
          </div> */}
          <div className="flex justify-between my-4">
            <span className="font-medium">Total Points</span>
            <span className="font-bold">{totalPoints||0}</span>
          </div>
          <div className="flex justify-between my-4">
            <span className="font-medium">Total Attempts</span>
            <span className="font-bold">{attemps||0}</span>
          </div>
          <div className="flex justify-between my-4">
            <span className="font-medium">Earn Points</span>
            <span className="font-bold">{earnPoints||0}</span>
          </div>
          <div className="flex justify-between my-4">
            <span className="font-medium">Result</span>
            <span style={{color: `${flag ? "#2aff95":"ff2a66" }`}} className="font-bold ">
              {flag? "Passed": "Failed"}</span>
          </div>

          {/* Buttons for restart, test page, and next level */}
          <div className="flex justify-center mt-8 gap-4">
          
            {/* Go back to the TestPage (Instructions) */}
            <Link
              className="btn bg-blue-500 text-white px-6 py-2 rounded-full"
              to="/quiz/english"
            >
              Start Page
            </Link>

            {/* Go to the next level */}
            {/* <button
              className="btn bg-green-500 text-white px-6 py-2 rounded-full"
              onClick={goToNextLevel}
            >
              Next Level
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
