
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import _ from "lodash"
import ErrorList from "./ErrorList"

const ScriptFormContainer = (props) => {
  const [errors, setErrors] = useState({})
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



  //
  const vaildForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name_of_promo", "description"]
    requiredFields.forEach(field => {debugger
    if (getScript[field].trim() ==="") {
      submitErrors = {
            ...submitErrors, [field]: "can not be blank"
        }
      }
    })
    
      setErrors(submitErrors)
      return _.isEmpty(submitErrors)
    }
        //
  const handleSubmit = (event) => {
    event.preventDefault()
      if (vaildForSubmission()) {
      props.addNewScriptFunction(getScript)
      setScript({
        name_of_promo: "",
        description: ""
      })
    }
  }


  
  
 
  return(
   
    <form className="callout"onSubmit={handleSubmit}>
      <ErrorList errors={errors} />
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





