import React, { useEffect , useState } from 'react'
import "../styles/Quiz.css"
//import data from '../Database/question_data'

// redux store import
import {useSelector , useDispatch} from 'react-redux'
import {PushAnswer} from '../hooks/setResult'

// custom hoook
import { useFetchQuestion , moveNextQuestion ,movePrevQuestion } from '../hooks/FetchQuestions'

export default function  Quiz() {
    const [checked,setChechked]= useState(undefined);
    const [ { isloading,apiData,serverError}] =useFetchQuestion()
    //const question = data[0]

    const disptch = useDispatch()
    const {trace, queue} = useSelector(state=>state.questions);
    const state = useSelector(state=>state)
    useEffect(()=>{
        console.log(state)
    })
    useEffect(()=>{
      // console.log(isloading)
       console.log(apiData)
      //console.log(serverError)


    })
    function  onSelect(i){
        console.log(i)
    }

    const questions=  useSelector(state => state.questions.queue[state.questions.trace] )
    //const trace = useSelector(state=> state.questions.trace)
    
    useEffect(()=>{
        console.log(questions)
    })
    // prev btn handle
    function onPrev(){
        console.log('On onPrev click')
        if(trace>0){
             // update to prev ques
              disptch(movePrevQuestion());
        } 
    }
    //next btn handle
    function onNext(){
        console.log('On onNext click')
        if(trace < queue.length -1)
        {
             // update to next question
             disptch(moveNextQuestion());
             disptch(PushAnswer(1))
        }
       
    }
    if(isloading) return <h3 className='text-light'>isloading</h3>
    if(serverError) return <h3 className='text-light'>[serverError|| "unknown error"]</h3>
  return (
    <div className='min-h-screen flex  items-center bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]'>
      <div className='container'>
          <h1 className='font-semibold text-5xl top-right lg:text-start leading-tight'>
            Quiz 
            </h1>
            {/* display question */}
            <div className='questions'>
                <h2 className='text'>{questions?.question}</h2>
                <ul key={questions?.id}>
               {
                    questions?.options.map((q,i)=>(
                        <li key={i}>
                            <input type="radio"
                            value={false}
                            name='option'
                            id={`q${i}-option`}
                            onChange={()=> onSelect(i)} 
                            />
                            <label className='text' htmlFor={`q${i}-option`}>{q}</label>
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
