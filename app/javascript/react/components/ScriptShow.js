import React, { useState, useEffect } from "react"

import ShotForm from "./ShotForm"

const ScriptShow = (props) => {
  const [board, setBoard] = useState({})
  const id = props.match.params.id 
  // debugger

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
    .then(body => {debugger
      setBoard(body.scripts) 
      
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    
  }, [])

  const addNewBoard = (newBoardObject) => {
    
    fetch(`/api/v1/scripts/${id}/.json`, {
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
  .then(body => {debugger
    setBoard(body.scripts.shots) 
    
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  
}

  
  return(
    <div>
      <h1>Greetings from Scripts Show page.  This will have all the tiles/shots from this script displayed.</h1>
    
    <ShotForm addNewShotFunction={addNewBoard}
    />
  </div>
    
  )
}


export default ScriptShow