
import React, { useState, useEffect } from "react"




const SingleShotTile = (props) =>{
  let poster 
    if(props.story_board){
      if(props.story_board.url !==null){
        poster = <img src={props.story_board.url}/>
      }
  }
  return(
    <div id="Script tile" className="shot-page-section">
      <li>SHOT NUMBER: {props.shot_number}</li>
      <li>DESCRIPTION:{props.description}</li>
      <li>DIALOGUE: {props.dialogue}</li>
      <li>NOTES:{props.notes}</li>
      {poster}
    </div>
  )
}

export default SingleShotTile