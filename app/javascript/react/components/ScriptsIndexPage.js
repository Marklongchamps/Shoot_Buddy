import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import ScriptFormContainer from "./ScriptFormContainer"

const ScriptsIndexPage = (props) => {
  const [scripts, setScripts] = useState([])
  
  const id = props.match.params.id
 
  useEffect(() => {
    fetch("/api/v1/scripts.json")
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
      setScripts(body.scripts) 
      
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    
  }, [])

  const addNewScriptFunction = (newScriptObject) => {
    
    fetch(`/api/v1/scripts.json`, {
      method: "POST",
      body: JSON.stringify(newScriptObject),
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
    setScripts([...scripts, body])
    
    
    
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  
  }
  
  const scriptListItems = scripts.map((script) => {
    
    return (
      <div key={script.id}>
          <Link to={`/scripts/${script.id}`}>
            <li>
            {script.name_of_promo} *  * {script.description}
            </li>
          </Link>
      </div>
    )
  })


  return (
    <div>
      <h1>Create a New Script</h1>
      <ScriptFormContainer addNewScriptFunction={addNewScriptFunction}
      />
      <br></br>
      <br></br>
      <h1>My Active Scripts</h1>
      <ol>
        {scriptListItems}
      </ol>
      
    </div> 
  )
}

export default ScriptsIndexPage




