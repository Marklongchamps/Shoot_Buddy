
import React, { useState, useEffect } from "react"
import TakeForm from "./TakeForm"
import { Link } from 'react-router-dom'
import DestroyShot from "./DestroyShot"


const ShotTile = (props) =>{

  const[shotid, setShotId] = useState(props.script_id)
  
  
  return(
    
    <div>
      <div  id="Script tile" className="shot-page-section">
        <Link to={`/scripts/${props.script_id}/shots/${props.shot_id}`}>
        <h4>SHOT NUMBER: {props.shot_number}</h4>
        </Link>
        <li>DESCRIPTION:{props.description}</li>
        <li>DIALOGUE: {props.dialogue}</li>
        <li>NOTES:{props.notes}</li>
        <img src={props.story_board.url}></img>
        <Link to={`/scripts/${props.script_id}/shots/${props.shot_id}/destroy`}>
        <button type="button" className="button alert">Delete Shot</button>
        </Link>
        <Link to={`/scripts/${props.script_id}/shots/${props.shot_id}/update`}>
        <button type="button" className="button">Edit Shot</button>
        </Link>
         
        </div>
          <div>
          <br></br>
          <br></br>
          </div>
        
    </div>
  
    
    )
    
  }



export default ShotTile




