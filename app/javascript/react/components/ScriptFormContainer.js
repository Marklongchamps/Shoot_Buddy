
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'

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
  // const vaildForSubmission = () => {
  //   let submitErrors = {}
  //   if (getScript.name_of_promo.trim() !=="") {
  //     return true
  //       } else { 
  //         setErrors({
  //           ...errors, name_of_promo: "can not be blank"
  //         }) 
  //     return false
  
  //       }
  //     }
    
  //     setErrors(submitErrors)
  // return _.isEmpty(submitErrors)
  //   }
        //
  const handleSubmit = (event) => {
    event.preventDefault()
    // if (vaildForSubmission())
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





