import React from "react"
import { Link } from 'react-router-dom'

const ScriptTile = (props) => {

return(
  <div>
    <Link to={`/scripts/${props.script_id}`}>
    <li>PROMO NAME: {props.name_of_promo}</li>
    </Link>
    DESCRIPTION: {props.name_of_promo}<br></br>
    CREATED ON: {(new Date (props.created_at)).toLocaleDateString()}
    <br></br>
    <br></br>
    
    
    </div>

)



}


export default ScriptTile


    //     <div key={script.id}>
    //         <Link to={`/scripts/${script.id}`}>
    //           <li>
    //           {script.name_of_promo} *  * {script.description} ||Creation Date {(new Date (script.created_at)).toLocaleDateString()}
    //           </li>
    //         </Link>
    //     </div>
    //   )
    // })