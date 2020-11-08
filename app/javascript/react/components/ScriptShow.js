
import React, { useState, useEffect } from "react"

import ShotForm from "./ShotForm"

import ShotTile from "./ShotTile"

const ScriptShow = (props) => {
  const [board, setBoard] = useState([])
  
  // const [take, setTakeinfo] = useState([])
  const id = props.match.params.id 
  
  useEffect(() => {
    fetch(`/api/v1/scripts/${id}`)
    .then (response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw error
      }

    })
    .then(response => response.json())
    .then(body => {
      setBoard(body.script.shots) 
      
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    
  }, [])
  
const showAllBoards = board.map((board) => {
  return ( <ShotTile
    script_id={id}
    shot_id={board.id}
    shot_number={board.shot_number}
    description={board.description}
    dialogue={board.dialogue}
    notes={board.notes} 
    
  />
  )

})

  return(
     <div>
        <div id="Script tile"     class="small-page-section"> 
          <h2>Enter a new shot for your Spot</h2>
          <ShotForm 
          script_id={id} 
          />
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <h2>Existing shots in your Spot</h2>
        <div>
      
        {showAllBoards} 
  
        </div>
      </div>
    
  )
}


export default ScriptShow











// import React, { useState, useEffect } from "react"

// import ShotForm from "./ShotForm"

// import ShotTile from "./ShotTile"

// const ScriptShow = (props) => {
//   const [board, setBoard] = useState([])
  
//   // const [take, setTakeinfo] = useState([])
//   const id = props.match.params.id 
  
//   useEffect(() => {
//     fetch(`/api/v1/scripts/${id}`)
//     .then (response => {
//       if (response.ok) {
//         return response
//       } else {
//         let errorMessage = `${response.status} (${response.statusText})`,
//           error = new Error(errorMessage)
//         throw error
//       }

//     })
//     .then(response => response.json())
//     .then(body => {
     
//       setBoard(body.script.shots) 
      
      
//     })
//     .catch(error => console.error(`Error in fetch: ${error.message}`))
    
//   }, [])
  
//   const addNewBoard = (newBoardObject) => {
   
    
//     fetch(`/api/v1/scripts/${id}/shots`, {
//       method: "POST",
//       body: JSON.stringify(newBoardObject),
//       credentials: "same-origin",
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//     })
//     .then (response => {
//     if (response.ok) {
//       return response
//     } else {
//       let errorMessage = `${response.status} (${response.statusText})`,
//         error = new Error(errorMessage)
//       throw error
//     }
//   })
//   .then(response => response.json())
//   .then(body => {
//     setBoard([...board, body.shot])
//     // setBoard([...board.shots, body])
    
    
//   })
//   .catch(error => console.error(`Error in fetch: ${error.message}`))
//   }


 
// const showAllBoards = board.map((board) => {
//   return ( <ShotTile 
//     script_id={id}
//     shot_id={board.id}
//     shot_number={board.shot_number}
//     description={board.description}
//     dialogue={board.dialogue}
//     notes={board.notes} 
    
//   />
   
//   )
// })

//   return(
    
//     <div>
//        <ShotForm addNewShotFunction={addNewBoard}
//     />
    
//       <h2>Enter a new shot for your Spot</h2>
     
//     <br></br>
//       <br></br>
//       <h2>Existing shots in your Spot</h2>
//       <div>
      
//     {showAllBoards} 
  
//     </div>
//   </div>
    
//   )
// }


// export default ScriptShow



