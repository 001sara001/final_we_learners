import React from 'react';
import { Link } from 'react-router-dom';

export default function Result() {
  function onRestart() {
    console.log('on Restart');
  }

  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]">
      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <div className="container bg-tranparent p-8 rounded-lg shadow-md">
          <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
            Quiz Result
          </h1>
          <div className="flex justify-between my-4">
            <span className="font-medium">User Name</span>
            <span className="font-bold">Daily Task</span>
          </div>
          <div className="flex justify-between my-4">
            <span className="font-medium">Total Points</span>
            <span className="font-bold">10</span>
          </div>
          <div className="flex justify-between my-4">
            <span className="font-medium">Total Attempts</span>
            <span className="font-bold">01</span>
          </div>
          <div className="flex justify-between my-4">
            <span className="font-medium">Result</span>
            <span className="font-bold text-green-500">Pass</span>
          </div>
          <div className="flex justify-center mt-8">
            <Link className="btn bg-orange-500 text-white px-6 py-2 rounded-full" to={'/quiz'} onClick={onRestart}>
              Restart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}