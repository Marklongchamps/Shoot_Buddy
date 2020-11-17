import React, { useEffect, useState } from 'react'
import ErrorList from './ErrorList'
import { Redirect } from "react-router-dom"
import _ from "lodash"

const UpdateScriptForm = (props) => {
  let defaultFields = {
    name_of_promo: "",
        description: ""
      }

const[updatedScript, setUpdatedScript] = useState(defaultFields)
const [errors, setErrors] = useState({})
const [shouldRedirect, setShouldRedirect] = useState(false)

useEffect(() => {
  let id = props.match.params.id
  fetch(`/api/v1/scripts/${id}`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Errror(errorMessage)
      throw error
    }
  })
  .then(body => {
    setUpdatedScript(body.script)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}, []);

const updateScript =(formData) => {debugger
  let id = props.match.params.id
  fetch(`/api/v1/scripts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(formData),
    credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body.errors) {
        SetErrors(body.errors)
      } else {debugger
        setShouldRedirect(body.script.id)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const inputChangeHandler = event => {
    setUpdatedScript({
      ...updatedScript,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name_of_promo", "description"]
    requiredFields.forEach(field => {
      if ((updatedScript[field].trim() === "")){
        submitErrors = {
          ...submitErrors,
          [field]: 'can not be blank'
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

const handleSubmit = event => {
  event.preventDefault()
  if (validForSubmission()) {
    updateScript(updatedScript);
  }
};

if (shouldRedirect) {debugger
  return <Redirect to={`/scripts/${shouldRedirect}`} />
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
          value={updatedScript.name_of_promo}       
         />
          </label>
    <label>
      Description
      <input
        name="description"
        id="description"
        type="text"
        onChange={inputChangeHandler} 
        value={updatedScript.description}   
        />
    </label>
    <input 
    type="submit"
    value="Update Script"
    />
  </form>
    )


}

export default UpdateScriptForm