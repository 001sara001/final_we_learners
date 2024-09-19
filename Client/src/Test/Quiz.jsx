import React, { useEffect , useState } from 'react'
import "../styles/Quiz.css"
import data from '../Database/question_data'



export default function  Quiz() {
    const [checked,setChechked]= useState(undefined);

    const question = data[0]

    useEffect(()=>{
        console.log(question)
    })
    function  onSelect(){
        console.log("Selected")
    }
    // prev btn handle
    function onPrev(){
        console.log('On onPrev click')
    }
    //next btn handle
    function onNext(){
        console.log('On onNext click')
    }
  return (
    <div className='min-h-screen flex  items-center bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]'>
      <div className='container'>
          <h1 className='font-semibold text-5xl top-right lg:text-start leading-tight'>
            Quiz 
            </h1>
            {/* display question */}
            <div className='questions'>
                <h2 className='text'>{question.question}</h2>
                <ul key={question.id}>
               {
                    question.options.map((q,i)=>(
                        <li key={i}>
                            <input type="radio"
                            value={false}
                            name='option'
                            id={'q${i}-option'}
                            onChange={onSelect()} 
                            />
                            <label className='text' htmlFor='q${i}-option'>{q}</label>
                            <div className='check'></div>
                        </li>
                    ))
               }
                   
                </ul>

            </div>
            <div className='grid'>
                <button className='btn prev'onClick={onPrev}>prev</button>
                <button className='btn next' onClick={onNext}>Next</button>

            </div>
    </div>
    </div>
  )
}
