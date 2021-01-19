
import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'



const AllTakesTile = (props) =>{debugger
  
  
  return(
    <div>
         <div id="Script tile" className="shot-page-section">
          <li>Take: {props.take}</li>
          <li>Time: {props.time}</li>
          <li>Notes: {props.notes}</li>

          <br></br>
          <Link to={`${props.pathScriptandShot}/takes/${props.takeid}/destroy`}>
          <button type="button" className="button alert">Delete Take</button>
          </Link>
        
          <Link to={`${props.pathScriptandShot}/takes/${props.takeid}/update`}>
          <button type="button" className="button">Edit Takes</button>
        </Link>
        </div>
      <br></br>
    </div>
  )
}

export default AllTakesTile