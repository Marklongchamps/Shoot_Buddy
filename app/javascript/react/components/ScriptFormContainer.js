
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

const ScriptFormContainer = (props) => {
  const [getScript, setScript] = useState({
    name_of_promo: "",
    description: ""
  })

  const inputChangeHandler = (event) => {
    
    setScript({
      ...getScript,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewScriptFunction(getScript)
    setScript({
      name_of_promo: "",
      description: ""
    })
  }
 
  return(
   
    <form onSubmit={handleSubmit}>
      <label>
        Name Of Promo
          <input
            name="name_of_promo"
            id="name_of_promo"
            type="text"
            onChange={inputChangeHandler} 
            value={getScript.name_of_promo}       
           />
            </label>
      <label>
        Description
        <input
          name="description"
          id="description"
          type="text"
          onChange={inputChangeHandler} 
          value={getScript.description}   
          />
      </label>
      <input 
      type="submit"
      value="Create New Script"
      />
    </form>
      )
    }
    
export default ScriptFormContainer





