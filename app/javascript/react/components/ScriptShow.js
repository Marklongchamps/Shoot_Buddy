
import React, { useState, useEffect } from "react"

import ShotForm from "./ShotForm"

import ShotTile from "./ShotTile"

const ScriptShow = (props) => {
  const [board, setBoard] = useState([])
  const [scriptName, setScriptName] = useState([])

  const id = props.match.params.id 
  
  useEffect(() => {
    fetch(`/api/v1/scripts/${id}`)
    .then (response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw error
      }

    })
    //body.scripts.shots is an array of all shots associated wtih this scirpt
    .then(response => response.json())
    .then(body => {

      setScriptName([...scriptName, body.script.name_of_promo])
      setBoard(body.script.shots)
      
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    
  }, [])


  //this isthenew part  addNewShot is theFOrmData from other page
  const addNewShotFunction = (addNewShot) => {debugger

    fetch(`/api/v1/scripts/${id}/shots`, {
      method: "POST",
      body: addNewShot,
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        'Accept': 'image/jpeg'
      } 
    })
    .then (response => {
     
    if (response.ok) {
      return response
    } else {
    let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage)
    throw error
      }
    })
    //open up board which is an array of all the SHOTS. body.shot which is new shot object has new shot info in it.  Now we open up board (whihch is array of shot objects) and enter in our object via spread operator.  also resets the state so we can see the new shot immediately body is the new object wer are inserting with all new shot data.
    .then(response => response.json())
    .then(body => {
      setBoard([...board, body.shot])
      
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`)) 
  }


  ///end of new part
  //this sends data to shottile to make map of all new shots
  const showAllBoards = board.map((board) => {
    return ( <ShotTile
      script_id={id}
      shot_id={board.id}
      shot_number={board.shot_number}
      description={board.description}
      dialogue={board.dialogue}
      notes={board.notes} 
      story_board={board.story_board_photo}
    
    />
    )
  })
//show all boards below prints out all boards
  return(
     <div>
        <div id="Script tile" className="small-page-section"> 
        
          <h2>Enter a new shot for your Spot</h2>
          
          <ShotForm addNewShotFunction={addNewShotFunction}
          scriptName={scriptName}
          script_id={id} 
          />
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <h2>Existing shots in your Spot</h2>
        <div>
        
        {showAllBoards} 
  
        </div>
      </div>
    )
}


export default ScriptShow








