import React from 'react'
import { useLocation, useNavigate } from 'react-router'
export default function WelcomePage() {
    const location = useLocation()
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
      <div className='container'>
      <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
       Welcome! Learners!
      </h1>
        </div>
        </div>
    </div>
  )
}
