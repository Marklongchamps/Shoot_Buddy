
import React, { useState, useEffect } from "react"
import SingleShotTile from "./SingleShotTile"
import TakeForm from "./TakeForm"
import AllTakesTile from "./AllTakesTile"

const SingleShot = (props) => {
 
    const [shot, setShot] = useState([])
    const [take, setTake] = useState([])

    const path = props.location.pathname
    const notake = props.match.path
    const id = props.match.params.id
    //id  is shot id
    useEffect(() => {
      
      fetch(`/api/v1${path}`)
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
        //set state with current shot name,desc, notes, number id  body.shot.takes is empty array
        setShot([...shot, body.shot])
        setTake(body.shot.takes)
        

      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
      
    }, [])
    ///add new take to database
    const addNewTakeFunction = (newTakeObject) => {
      
     fetch(`/api/v1${path}/takes.json`, {
      
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
      // setShot([...shot, body.take.shot])
      setTake([...take, body.take])
      // setTake([...shot, body.take])
    
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  
  }

    
    const showSingleShot = shot.map((board) => {
  
      return ( <SingleShotTile 
        id={board.id}
        shot_number={board.shot_number}
        description={board.description}
        dialogue={board.dialogue}
        notes={board.notes} 
        story_board={board.story_board_photo}
        
        // story_board_photo={board.story_board_photo.url}
        //send down takes
       
      />
     
      )
    })

    const showAllTakes = take.map((singletake) => {
  
      return ( <AllTakesTile
        takeid={singletake.id}
        take={singletake.take}
        pathScriptandShot={path}
        alltest={singletake}
       
      />
     
      )
    })

    



    return(
      <div>
      
    <h3>Info on your Single shot</h3>
    {showSingleShot}
    
    <TakeForm addNewTakeFunction={addNewTakeFunction}
    
    />
    <br></br>
    <br></br>
    <h2>All takes for this shot:</h2>
    <ol>{showAllTakes}</ol>
    </div>
  
  )
}


export default SingleShot
















// import React, { useState, useEffect } from "react"
// import SingleShotTile from "./SingleShotTile"
// import TakeForm from "./TakeForm"

// const SingleShot = (props) => {
//     const [shot, setShot] = useState([])
//     const [take, setTakeinfo] = useState([])
//     const path = props.location.pathname
    
//     useEffect(() => {
      
//       fetch(`/api/v1${path}`)
//       .then (response => {
//         if (response.ok) {
//           return response
//         } else {
//           let errorMessage = `${response.status} (${response.statusText})`,
//             error = new Error(errorMessage)
//           throw error
//         }
  
//       })
//       .then(response => response.json())
//       .then(body => {
        
//         setShot([...shot, body.shot])

//       })
//       .catch(error => console.error(`Error in fetch: ${error.message}`))
      
//     }, [])
//     ///add new take to database
//     const addNewTakeFunction = (newTakeObject) => {debugger

//      fetch(`/api/v1${path}`, {
      
//       method: "POST",
//       body: JSON.stringify(newTakeObject),
//       credentials: "same-origin",
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//     })
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
//   .then(body => {
    
//     setTakeinfo([...take, body.shot.takes])
    
//   })
//   .catch(error => console.error(`Error in fetch: ${error.message}`))
  
//   }

    
//     const showSingleShot = shot.map((board) => {
  
//       return ( <SingleShotTile 
//         id={board.id}
//         shot_number={board.shot_number}
//         description={board.description}
//         dialogue={board.dialogue}
//         notes={board.notes} 
//         story_board_photo={board.story_board_photo.url}
       
//       />
       
//       )
//     })

//     return(
//       <div>
      
//     <h3>Info on your Single shot</h3>
//     {showSingleShot}
//     <TakeForm addNewTakeFunction={addNewTakeFunction}
//     />
//     </div>
  
//   )
// }


// export default SingleShot