import React, { useEffect, useState } from 'react'
import { QuizData } from '../data/QuizData';
import QuizResult from "./QuizResult";
// import TimeOut from './TimerOut';
// import { NavLink } from 'react-router-dom';


function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const [second, setSecond] = useState(5);
    const [minutes, setMinutes] = useState(1);
    
    // var timer;
    useEffect(()=>{
     const timer = setTimeout(()=>{
         setSecond(second-1);
         if(second===1){
            setMinutes(minutes-1);
            setSecond(5);
         }
      },1000)
      return()=> clearInterval(timer);
    });
    if(minutes===0 && second===1){
        ////////////////////////
    //    <NavLink to="timeOut" />
        alert("Time is out")
        setMinutes(1);
        setSecond(5);

    }

    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            //////
            // if (===4) {
            //   setMinutes("") 
            //   setSecond("")
            // }
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div>
        <p className="heading-txt">Quiz APP</p>
        <h1>Timer</h1>
        <h2>{minutes <10 ? "0"+minutes : minutes}:{second<10 ? "0"+ second:second}</h2>
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
                // <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption === i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            {/* <input type='button' value="ReStart" /> */}
            </>)}
        </div>
    </div>
  )
}

export default Quiz;