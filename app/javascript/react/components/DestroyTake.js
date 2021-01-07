import React, { useEffect, useState } from 'react'
import { Redirect } from "react-router-dom"

const DestroyTake = (props) => {
  const [currentTake, setCurrentTake] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [longPath, setlongPath] = useState(props.location.pathname)
  let the_url = props.location.pathname
  
  useEffect(() => {
   ///fixes url to get Take
   function RemoveLastDirectoryPartOf(the_url) {
    var the_arr = the_url.split('/');
    the_arr.pop();
    return (the_arr.join('/'));
  }
  let newurl = RemoveLastDirectoryPartOf(the_url)

///fixes url to get Take change line in fetch to pull clenaed url
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
      setCurrentTake(body.take)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, []);

    const onClickDelete = event => {
      event.preventDefault()

      ///fixes url to get Take
   function RemoveLastDirectoryPartOf(the_url) {
    var the_arr = the_url.split('/');
    the_arr.pop();
    return (the_arr.join('/'));
  }
  let newurl = RemoveLastDirectoryPartOf(the_url)

///fixes url to get Take change line in fetch to pull clenaed url
      let id = props.match.params.id
        fetch(`/api/v1/${newurl}`, {
        method: 'DELETE',
        body: JSON.stringify(),
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
          // handle errors
        } else {
          setShouldRedirect(true)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    };
      
   ///fixes url to get Take
   function RemoveLastDirectoryPartOf(the_url) {
    var the_arr = the_url.split('/');
    the_arr.splice(-3);
    return (the_arr.join('/'));
  }
  let redir = RemoveLastDirectoryPartOf(the_url)

///fixes url to get Take change line in fetch to pull clenaed u
const onClickCancel = event => {
  event.preventDefault()
  setShouldRedirect(true)
}


      if (shouldRedirect) {
        return <Redirect to={redir} />
      }
    
      return (
        <div className='grid-container wrapper'>
          <h4>Are you sure you want to delete?  This CAN NOT be undone and you will lose the take.  {currentTake.name}</h4>
          <div className='button-group'>
              <input onClick={onClickDelete} className='button alert' type='submit' value='Delete Take' />
              <input onClick={onClickCancel} className='button' type='button' value='Cancel' />
            </div>
        </div>
      )
    }





export default DestroyTake