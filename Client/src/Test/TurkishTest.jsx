
import React from "react";
import { Link } from 'react-router-dom'
import "../styles/Quiz.css"
const TurkishQuiz = () => {
  return (
    <div className="min-h-screen flex flex-col-center  items-center bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]">
      <div className="Container">
        <div className="font text-5xl top-right lg:text-start leading-tight">
          <h2>
            Quiz instruction
          </h2>
          <ol className=' top-right lg:text-start leading-tight'>
              <li>1. You will be asked 5 questions on after another</li>
              <li>2. 10 points for awarder for the correct answer</li>
              <li>3. Each question has three options. you can only choice one</li>
              <li>4. You can review and change the option before the quiz finish</li>
              <li>5. Result will be declared at the enf of the quiz</li>
            </ol>
            <div className='start'>
              <Link className='btn' to="/quiz/Turkish/start">Start</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BanglaQuiz;
