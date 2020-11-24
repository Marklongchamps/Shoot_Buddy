import React, { useEffect, useState, useRef } from 'react'
import TakeForm from './TakeForm'


var Timer = () => {

    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)
  
    const handleStart = () => {
      setIsActive(true)
      setIsPaused(true)
      countRef.current = setInterval(() => {
        setTimer((timer) => timer +10)
      }, 10)
      }
    
  
    const handlePause = () => {
      clearInterval(countRef.current)
      setIsPaused(false)
    }
  
    const handleResume = () => {
      setIsPaused(true)
      countRef.current = setInterval(() => {
        setTimer((timer) => timer +10)
      },10)
    }
  
    const handleReset = () => {
     clearInterval(countRef.current)
     setIsActive(false)
     setIsPaused(false)
     setTimer(0)
    }
    

    const formatTime = () =>{
    
      const getMiliSeconds = `${("0" + ((timer / 10) % 100))}`.slice(-2)
      const getSeconds = `${("0" + Math.floor((timer / 1000) % 60))}`.slice(-2)
     
      const getMinutes = `${("0" + Math.floor((timer / 60000) % 60))}`.slice(-2)

      let currentTime = `${getMinutes} : ${getSeconds} : ${getMiliSeconds}`

      

    return currentTime
    }
    
    
   
    return (
      <div className="app">
        <h3>Take Timer</h3>
        <div className='stopwatch-card'>
          <p>{formatTime()}</p> {/* here we will show timer */}
          <div className='buttons'>

            {
            !isActive && !isPaused ?
              <button  className="button" onClick={handleStart}>Start</button>
              : (
                isPaused ? <button  className="button" onClick={handlePause}>Pause</button> :
                  <button  className="button" onClick={handleResume}>Resume</button>
              )
          }
          <button  className="button" onClick={handleReset} disabled={!isActive}>Reset</button>
          
          </div>
        </div>
      </div>
    );
  }
  
 



export default Timer















