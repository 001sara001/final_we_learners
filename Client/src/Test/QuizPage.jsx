import React, {useState , useEffect} from "react";
import { useParams , useNavigate  } from "react-router";
import axios from "axios";

function QuizPage(){

    const {language , level} = useParams();
    const [questions , setQestions]= useState();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnser] = useState('');
    const [score, setScore] = useState(0);
    const navigate = useNavigate();


    return (
        <div>
          <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
         <p>{questions[currentQuestionIndex].question}</p>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              style={{ backgroundColor: selectedAnswer === option ? 'lightblue' : '' }}
            >
              {option}
            </button>
          ))}
          <br />
          <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </div>
      );
}
export default QuizPage;