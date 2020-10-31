import { checkPropTypes } from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

const ScriptFormContainer = () => {
  const [getScript, setScript] = useState({})


  useEffect(() => {
    fetch("/api/v1/scripts.json")
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      
      .then(response => response.json())
      //gets object array of scripts
      .then(body => {
        let script = body.scripts
        setScript(script)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const inputChangeHandler = (event) => {
    setScript({
      ...getScript,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("/api/v1/scripts.json", {
      method: 'POST',
      body: JSON.stringify(getScript),
      credentials: "same-origin",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setScript([
        ...getScript,
        body])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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





