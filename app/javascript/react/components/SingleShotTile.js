
import React, { useState, useEffect } from "react"
import TakeForm from "./TakeForm"



const SingleShotTile = (props) =>{
  
  return(
  <div>
    <li>SHOT NUMBER: {props.shot_number}</li>
    <li>DESCRIPTION:{props.description}</li>
    <li>DIALOGUE: {props.dialogue}</li>
    <li>NOTES:{props.notes}</li>
    {/* <TakeForm 
    addNewTake={props.addNewTake}
   /> */}
  
    <br></br>
    <br></br>
  </div>
  )
}

export default SingleShotTile