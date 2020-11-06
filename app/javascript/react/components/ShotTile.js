
import React, { useState, useEffect } from "react"
import TakeForm from "./TakeForm"
import { Link } from 'react-router-dom'


const ShotTile = (props) =>{
  
  return(
  <div>
     <Link to={`/scripts/${props.script_id}/shots/${props.shot_id}`}>
    <li>SHOT NUMBER: {props.shot_number}</li>
    </Link>
    <li>DESCRIPTION:{props.description}</li>
    <li>DIALOGUE: {props.dialogue}</li>
    <li>NOTES:{props.notes}</li>
    {/* <TakeForm 
    addNewTake={props.addNewTake} */}
   
  
    <br></br>
    <br></br>
  </div>
  )
}

export default ShotTile