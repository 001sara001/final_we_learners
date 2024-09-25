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

        <div className='start mt-5'>
          <h2 className='text-2xl mb-3'>Take Test:</h2>
          <div className='level-buttons'>
            <Link className='btn' to="/quiz/start">Start</Link>
          
          </div>
        </div>
      </div>
    </div>
  );
}
