import React, { useEffect, useState } from 'react'
import ErrorList from './ErrorList'
import { Redirect } from "react-router-dom"
import _ from "lodash"

const UpdateTakeForm = (props) => {
  let defaultFields = {
    take: "",
      }

const[updatedTake, setUpdatedTake] = useState(defaultFields)
const [errors, setErrors] = useState({})
const [shouldRedirect, setShouldRedirect] = useState(false)
const [shotId, setShotId] = useState()

useEffect(() => {
  let the_url = props.location.pathname
  ///fixes url to get shot
  function RemoveLastDirectoryPartOf(the_url) {
    var the_arr = the_url.split('/');
    the_arr.pop();
    return (the_arr.join('/'));
  }
  let newurl = RemoveLastDirectoryPartOf(the_url)

///fixes url to get shot change line in fetch to pull clenaed url
  fetch(`/api/v1/${newurl}`)
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
    setUpdatedTake(body.take)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}, []);

const updateTake =(formData) => {

  let the_url = props.location.pathname
  ///fixes url to get shot
  function RemoveLastDirectoryPartOf(the_url) {
    var the_arr = the_url.split('/');
    the_arr.pop();
    return (the_arr.join('/'));
  }
  let newurl = RemoveLastDirectoryPartOf(the_url)


  fetch(`/api/v1/${newurl}`, {
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
      } else {
        setShotId(body.take.shot.id)

        setShouldRedirect(body.take.id)
        
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const inputChangeHandler = event => {
    setUpdatedTake({
      ...updatedTake,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  // const validForSubmission = () => {
  //   let submitErrors = {}
  //   const requiredFields = ["name_of_promo", "description"]
  //   requiredFields.forEach(field => {
  //     if ((updatedScript[field].trim() === "")){
  //       submitErrors = {
  //         ...submitErrors,
  //         [field]: 'can not be blank'
  //       }
  //     }
  //   })

  //   setErrors(submitErrors)
  //   return _.isEmpty(submitErrors)
  

const handleSubmit = event => {
  event.preventDefault()
  // if (validForSubmission()) {
    updateTake(updatedTake);
  
};

if (shouldRedirect) {
  return <Redirect to={`/scripts/${shouldRedirect}/shots/${shotId}`} />
}

return (
  <form onSubmit={handleSubmit}>
    <label>
      Take
      <input
        name="take"
        id="take"
        type="text"
        onChange={inputChangeHandler}
        value={updatedTake.take}
      />
    
        </label>

    <div>
      <input type="submit" value="Update Take" />
    </div>
  </form>
)
}

export default UpdateTakeForm