
import React, { useState, useEffect } from "react"
import TakeForm from "./TakeForm"



const SingleShotTile = (props) =>{debugger
  let poster 
    if(props.story_board_photo){
      if(props.story_board_photo.url !==null){
        poster = <img src={props.story_board_photo.url}/>
      }
  }
  return(
    <div id="Script tile" class="shot-page-section">
      <li>SHOT NUMBER: {props.shot_number}</li>
      <li>DESCRIPTION:{props.description}</li>
      <li>DIALOGUE: {props.dialogue}</li>
      <li>NOTES:{props.notes}</li>
      {poster}
    </div>
  )
}

export default SingleShotTile