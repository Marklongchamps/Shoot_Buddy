import React, { useState, useEffect } from "react"
import Dropzone from "react-dropzone"

  const ShotForm = (props) => {
    
    const id = props.script_id
    
    const [newShot, setNewShot] = useState({
    shot_number: "",
    description: "",
    dialogue: "",
    notes: "",
    image: ""
  })

  const handleChange = (event) => {
    setNewShot({
      ...newShot,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFileUpload = (acceptedFiles) => {
    setNewShot({
      ...newShot,
      image: acceptedFiles[0]
    })
  }

  const handleSubmit = (event) => {
    
    event.preventDefault()
    let completeshot = new FormData()
    completeshot.append("Shot Number",newShot.shot_number)
    completeshot.append("Description",newShot.description)
    completeshot.append("Dialogue",newShot.dialogue)
    completeshot.append("Notes",newShot.notes)
    completeshot.append("Photo",newShot.image)

      fetch(`/api/v1/scripts/${id}/shot`, {
            method: "POST",
            body: completeshot,
            credentials: "same-origin",
            
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
        
      }
    
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Shot Number:
        <input
          name="shot_number"
          id="shot_number"
          type="number"
          onChange={handleChange}
          value={newShot.shot_number}
        />
      </label>
      <label>
        Description:
        <input
          name="description"
          id="description"
          type="text"
          onChange={handleChange}
          value={newShot.description}
        />
      </label>
        Dialogue:
        <input
          name="dialogue"
          id="dialogue"
          type="text"
          onChange={handleChange}
          value={newShot.dialogue}
          />
          <label>
        Notes:
        <input
          name="notes"
          id="notes"
          type="text"
          onChange={handleChange}
          value={newShot.notes}
          />
          </label>
          

   <Dropzone onDrop={handleFileUpload}>
    {({getRootProps, getInputProps}) => (
    <section>
    <div {...getRootProps()}>
    <input {...getInputProps()} />
    <button type="button" class="learn more button">CLICK HERE TO ADD A STORY BOARD SHOT TO THE SHOT</button>
    </div>
    </section>
    )}
  </Dropzone>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>

    )
  
}

export default ShotForm















// import React, { useState, useEffect } from "react"
// import Dropzone from "react-dropzone"

// const ShotForm = (props) => {
//   const [newBoardPhoto, setBoardPhoto] = useState({
//     name: "",
//     image: ""
//   })

//   const [newShot, setNewShot] = useState({
//     shot_number: "",
//     description: "",
//     dialogue: "",
//     notes: ""
//   })

//   const handleChange = (event) => {
//     setNewShot({
//       ...newShot,
//       [event.currentTarget.name]: event.currentTarget.value
//     })
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     props.addNewShotFunction(newShot)
//     setNewShot({
//     shot_number: "",
//     description: "",
//     dialogue: "",
//     notes: ""
//     })
//   }
//   const handleFileUpload = (acceptedFiles) => {
//     setBoardPhoto({
//       ...newBoardPhoto,
//       image: acceptedFiles[0]
//     })
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Shot Number
//         <input
//           name="shot_number"
//           id="shot_number"
//           type="number"
//           onChange={handleChange}
//           value={newShot.shot_number}
//         />
//       </label>
//       <label>
//         Description:
//         <input
//           name="description"
//           id="description"
//           type="text"
//           onChange={handleChange}
//           value={newShot.description}
//         />
//       </label>
//         Dialogue:
//         <input
//           name="dialogue"
//           id="dialogue"
//           type="text"
//           onChange={handleChange}
//           value={newShot.dialogue}
//           />
//           <label>
//         Notes:
//         <input
//           name="notes"
//           id="notes"
//           type="text"
//           onChange={handleChange}
//           value={newShot.notes}
//           />
//           </label>
          

//    <Dropzone onDrop={handleFileUpload}>
//     {({getRootProps, getInputProps}) => (
//     <section>
//     <div {...getRootProps()}>
//     <input {...getInputProps()} />
//     <p>CLICK HERE TO ADD A STORY BOARD SHOT TO THE SHOT</p>
//     </div>
//     </section>
//     )}
//   </Dropzone>

//       <div>
//         <input type="submit" value="Submit" />
//       </div>
//     </form>




//     )
  
// }







// export default ShotForm




