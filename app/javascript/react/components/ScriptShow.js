
import React, { useState, useEffect } from "react"

import ShotForm from "./ShotForm"

import ShotTile from "./ShotTile"

const ScriptShow = (props) => {
  const [board, setBoard] = useState([])
  
  const [take, setTakeinfo] = useState([])
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
  
  const addNewBoard = (newBoardObject) => {
   
    
    fetch(`/api/v1/scripts/${id}/shots`, {
      method: "POST",
      body: JSON.stringify(newBoardObject),
      credentials: "same-origin",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
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
    setBoard([...board, body.shot])
    // setBoard([...board.shots, body])
    
    
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

////////
const addNewTake = (newTakeObject) => {
   debugger
  fetch(`/api/v1/scripts/${id}`, {
    method: "POST",
    body: JSON.stringify(newTakeObject),
    credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  })
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
  setTakeinfo(take)
  
  
})
.catch(error => console.error(`Error in fetch: ${error.message}`))
}

/////////
 
const showAllBoards = board.map((board) => {
  
  return ( <ShotTile 
    script_id={id}
    shot_id={board.id}
    shot_number={board.shot_number}
    description={board.description}
    dialogue={board.dialogue}
    notes={board.notes} 
    addNewTake={addNewTake}
  />
   
  )
})

  return(
    
    <div>
       <ShotForm addNewShotFunction={addNewBoard}
    />
    
      <h2>Enter a new shot for your Spot</h2>
     
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
// import TakeForm from "./TakeForm"

// const ScriptShow = (props) => {
//   const [board, setBoard] = useState([])
  
//   const [take, setTakeinfo] = useState([])
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
//     debugger
//     setBoard([...board, body.shot])
//     // setBoard([...board.shots, body])
    
    
//   })
//   .catch(error => console.error(`Error in fetch: ${error.message}`))
//   }

// ////////
// const addNewTake = (newTakeObject) => {
   
//   fetch(`/api/v1/scripts/${id}/shots.json`, {
//     method: "POST",
//     body: JSON.stringify(newTakeObject),
//     credentials: "same-origin",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//   })
//   .then (response => {
//   if (response.ok) {
//     return response
//   } else {
//     let errorMessage = `${response.status} (${response.statusText})`,
//       error = new Error(errorMessage)
//     throw error
//   }
// })
// .then(response => response.json())
// .then(body => {
//   setTakeinfo(take)
  
  
// })
// .catch(error => console.error(`Error in fetch: ${error.message}`))
// }

// /////////
 
// const showAllBoards = board.map((board) => {
  
//   return (
//   <ShotTile 
//   board={board.shot_number}

//   />
//     <div key={board.id}>
      
//           <li>
//           <h3>SHOT NUMBER {board.shot_number}</h3>
//           <p>DESCRIPTION: {board.description}</p>
//           <p>DIALOGUE:    {board.dialogue}</p>
//           <p>NOTES:        {board.notes} </p>
//          </li>
//          <TakeForm addNewTakeFunction={addNewTake}/>
//     </div>
//     )
//   })

 


//   return(
//     <div>
//       <h2>Enter a new shot for your Spot</h2>
    
//     <ShotForm addNewShotFunction={addNewBoard}
//     />
//     <br></br>
//       <br></br>
//       <h2>Existing shots in your Spot</h2>
//     <ol>{showAllBoards}</ol>
    
//   </div>
    
//   )
// }


// export default ScriptShow