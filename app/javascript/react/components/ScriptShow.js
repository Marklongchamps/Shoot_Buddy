import React, { useState, useEffect } from "react"

import ShotForm from "./ShotForm"

const ScriptShow = (props) => {
  const [board, setBoard] = useState({})
  const [shotinfo, setShotinfo] = useState([])
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
    .then(response => response.json())
    .then(body => {
      setBoard(body.script) 
      setShotinfo(body.script.shots)
      
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    
  }, [])
  
  const addNewBoard = (newBoardObject) => {
    
    
    fetch(`/api/v1/scripts/${id}/shots.json`, {
      method: "POST",
      body: JSON.stringify(newBoardObject),
      credentials: "same-origin",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
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
  .then(response => response.json())
  .then(body => {
    setBoard([...board.shots, body])
    
    
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  }
  
const showAllBoards = shotinfo.map((board) => {
  
  return (
    <div >
      
          <li>
          <h3>SHOT NUMBER {board.shot_number}</h3>
          <p>DESCRIPTION: {board.description}</p>
          <p>DIALOGUE:    {board.dialogue}</p>
          <p>NOTES:        {board.notes} </p>
         </li>
    </div>
    )
  })

 


  return(
    <div>
      <h2>Enter a new shot for your Spot</h2>
    
    <ShotForm addNewShotFunction={addNewBoard}
    />
    <br></br>
      <br></br>
      <h2>Existing shots in your Spot</h2>
    <ol>{showAllBoards}</ol>
  </div>
    
  )
}


export default ScriptShow