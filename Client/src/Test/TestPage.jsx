import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/testPage.css";

export default function TestPage() {
  return (
    <div className='min-h-screen flex flex-col-center items-center bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]'>
      <div className='container'>
        <h1 className='font-semibold text-5xl top-right lg:text-start leading-tight'>
          Quiz Instruction
        </h1>
        <ol className=' top-right lg:text-start leading-tight'>
          <li>1. You will be asked 5 questions per level</li>
          <li>2. 10 points will be awarded for each correct answer</li>
          <li>3. Each question has multiple options, but you can only choose one</li>
          <li>4. You can review and change your answers before the quiz ends</li>
          <li>5. Your result will be shown at the end of the quiz</li>
        </ol>

        <Link
              className="btn bg-blue-500 text-white px-6 py-2 rounded-full"
              to="/quiz/start"
            >
              Start
            </Link>
          {/* <h2 className='text-2xl mb-3'>Choose your Level:</h2>
          <div className='level-buttons'>
            <Link className='btn' to="/quiz/start?level=1">Level 1</Link>
            <Link className='btn' to="/quiz/start?level=2">Level 2</Link>
            <Link className='btn' to="/quiz/start?level=3">Level 3</Link>
            <Link className='btn' to="/quiz/start?level=4">Level 4</Link>
            <Link className='btn' to="/quiz/start?level=5">Level 5</Link>
          </div> */}
        </div>
      </div>
    
  );
}
