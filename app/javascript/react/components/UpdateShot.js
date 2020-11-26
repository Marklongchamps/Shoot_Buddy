


import React, { useEffect, useState } from 'react'
import ErrorList from './ErrorList'
import { Redirect } from "react-router-dom"
import _ from "lodash"
import Dropzone from "react-dropzone"

const UpdateShotForm = (props) => {
  let defaultFields = {
    shot_number: "",
        description: "",
        dialogue:"",
        notes:"",
        story_board_photo:""

      }

const[updatedShot, setUpdatedShot] = useState(defaultFields)
const [errors, setErrors] = useState({})
const [shouldRedirect, setShouldRedirect] = useState(false)
let id = props.match.params.id
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
    setUpdatedShot(body.shot)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}, []);

const updateShot = (formData) => {

  let the_url = props.location.pathname
  ///fixes url to get shot
  function RemoveLastDirectoryPartOf(the_url) {
    var the_arr = the_url.split('/');
    the_arr.pop();
    return (the_arr.join('/'));
  }
  let newurl = RemoveLastDirectoryPartOf(the_url)
  
  fetch(`/api/v1${newurl}`, {
    method: 'PATCH',
    body: formData,
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Accept': 'image/jpeg'
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
    .then(body => {debugger
      if (body.errors) {
        SetErrors(body.errors)
      } else {
        setShouldRedirect(body.shot.script.id)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const handleChange = event => {
    setUpdatedShot({
      ...updatedShot,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFileUpload = (acceptedFiles) => {
    setUpdatedShot({
      ...updatedShot,
      story_board_photo: acceptedFiles[0]
    })
  }

  // const validForSubmission = () => {
  //   let submitErrors = {}
  //   const requiredFields = ["name_of_promo", "description"]
  //   requiredFields.forEach(field => {
  //     if ((updatedShot[field].trim() === "")){
  //       submitErrors = {
  //         ...submitErrors,
  //         [field]: 'can not be blank'
  //       }
  //     }
  //   })

  //   setErrors(submitErrors)
  //   return _.isEmpty(submitErrors)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    let completeshot = new FormData()
    completeshot.append("shot_number",updatedShot.shot_number)
    completeshot.append("description",updatedShot.description)
    completeshot.append("dialogue",updatedShot.dialogue)
    completeshot.append("notes",updatedShot.notes)
    completeshot.append("story_board_photo",updatedShot.story_board_photo)
    //sends data vaiprops to the scriptshow page
    // props.addNewShotFunction(completeshot)
    
    updateShot(completeshot)
  }

if (shouldRedirect) {debugger
  return <Redirect to={`/scripts/${shouldRedirect}`} />
}

  return (
    
    <form onSubmit={handleSubmit}>
      <h2>SHOT DATA EDITOR</h2>
      <label>
        Shot Number:
        <input
          name="shot_number"
          id="shot_number"
          type="number"
          onChange={handleChange}
          value={updatedShot.shot_number}
        />
      </label>
      <label>
        Description:
        <input
          name="description"
          id="description"
          type="text"
          onChange={handleChange}
          value={updatedShot.description}
        />
      </label>
        Dialogue:
        <input
          name="dialogue"
          id="dialogue"
          type="text"
          onChange={handleChange}
          value={updatedShot.dialogue}
          />
          <label>
        Notes:
        <input
          name="notes"
          id="notes"
          type="text"
          onChange={handleChange}
          value={updatedShot.notes}
          />
          </label>
          

   <Dropzone onDrop={handleFileUpload}>
    {({getRootProps, getInputProps}) => (
    <section>
    <div {...getRootProps()}>
    <input {...getInputProps()} />
    <button type="button" className="learn more button">CLICK HERE TO REPLACE OR ADD A STORYBOARD</button>
    </div>
    </section>
    )}
  </Dropzone>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>

    )
  

}

export default UpdateShotForm









