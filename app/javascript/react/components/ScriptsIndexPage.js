import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const ScriptsIndexPage = (props) => {
  const [scripts, setScripts] = useState([])
 
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

  const scriptListItems = scripts.map((script) => {
    return (
      <div>
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
      
      <ul>
        {scriptListItems}
      </ul>
    </div> 
  )
}

export default ScriptsIndexPage