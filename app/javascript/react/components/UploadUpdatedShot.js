import React, { useEffect, useState } from 'react'
import ErrorList from './ErrorList'
import { Redirect } from "react-router-dom"
import _ from "lodash"
import Dropzone from "react-dropzone"
import UpdateShot from "./UpdateShot"


const uploadUpdatedShot =(props) => {debugger

  let the_url = props.location.pathname
  ///fixes url to get shot
  function RemoveLastDirectoryPartOf(the_url) {
    var the_arr = the_url.split('/');
    the_arr.pop();
    return (the_arr.join('/'));
  }
  let newurl = RemoveLastDirectoryPartOf(the_url)
  const uploadUpdatedShotFunction = (completeshot) =>{

  fetch(`/api/v1${newurl}`, {
    method: 'PATCH',
    body: completeshot,
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
    .then(body => {debugger
      if (body.errors) {
        SetErrors(body.errors)
      } else {
        setShouldRedirect(body.shot.script.id)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };


  return(
    <div>
  <UpdateShot uploadUpdatedShotFunction={uploadUpdatedShotFunction}
  />
  </div>
  )
}

  


export default uploadUpdatedShot