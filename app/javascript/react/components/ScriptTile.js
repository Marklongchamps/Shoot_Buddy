import React from "react"
import { Link } from 'react-router-dom'

const ScriptTile = (props) => {

return(
  <div>
  <div id="Script tile" class="small-page-section">
    <Link to={`/scripts/${props.script_id}`}>
    <li>PROMO NAME: {props.name_of_promo}</li>
    </Link>
    DESCRIPTION: {props.description}<br></br>
    CREATED ON: {(new Date (props.created_at)).toLocaleDateString()}<br></br>
    LAST UPDATED: {(new Date (props.updated_at)).toLocaleString()}
    </div>
    <br></br>
    <br></br>
    </div>
   
) 
}

export default ScriptTile


   