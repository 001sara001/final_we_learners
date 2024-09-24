import React, { useEffect , useState } from 'react'
import "../styles/Quiz.css"
//import data from '../Database/question_data'
import { useNavigate } from 'react-router-dom';

// redux store import
import {useSelector , useDispatch} from 'react-redux'
import {PushAnswer} from '../hooks/setResult'

// custom hoook
import { useFetchQuestion , moveNextQuestion ,movePrevQuestion } from '../hooks/FetchQuestions'
import { updateResultAction } from '../redux/res_redx';

export default function  Quiz() {
    const [checked,setChechked]= useState(undefined);
    const [ { isloading,apiData,serverError}] =useFetchQuestion()
    //const question = data[0]
    const navigate = useNavigate();

    const disptch = useDispatch()
    const {trace, queue} = useSelector(state=>state.questions);
    const result = useSelector(state=>state.result.result)
    useEffect(()=>{
        //console.log(result)
        console.log({trace, checked})
       disptch(updateResultAction(trace, checked))
    })
    useEffect(()=>{
      // console.log(isloading)
       console.log(apiData)
      //console.log(serverError)


    })
    function  onSelect(i){
        console.log(i)
        setChechked(i);
        
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
             if(result.length <= trace)
             {
                disptch(PushAnswer(checked));
             }
             
        }
        else{
            disptch(PushAnswer(checked))
        }
         // Reset the checked value
         setChechked(undefined);
        
       
    }
    function onSubmit() {
        disptch(PushAnswer(checked));
        navigate('/result'); 
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
                            <div className={`check ${result[trace]=== i ? 'check': ''}`}></div>
                        </li>
                    ))
               }
                   
                </ul>

            </div>
            <div className='grid'>
              
            {trace > 0 && (
                        <button className='btn prev' onClick={onPrev}>Prev</button>
                    )}                 {trace < queue.length - 1 ? (
            <button className="btn next" onClick={onNext}>
              Next
            </button>
          ) : (
          
            <button className="btn submit" onClick={onSubmit}>
              Submit
            </button>
          )}
            </div>
    </div>
    </div>
  )
}
