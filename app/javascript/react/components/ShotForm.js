import React, { useState, useEffect } from "react"
import Dropzone from "react-dropzone"

  const ShotForm = (props) => {
    
    const id = props.script_id
    const scriptName = props.scriptName[0]
    
    const [newShot, setNewShot] = useState({
    shot_number: "",
    description: "",
    dialogue: "",
    notes: "",
    story_board_photo: ""
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
      story_board_photo: acceptedFiles[0]
    })
  }

  const handleSubmit = (event) => {
    
    
    event.preventDefault()
    let completeshot = new FormData()
    completeshot.append("shot_number",newShot.shot_number)
    completeshot.append("description",newShot.description)
    completeshot.append("dialogue",newShot.dialogue)
    completeshot.append("notes",newShot.notes)
    completeshot.append("story_board_photo",newShot.story_board_photo)
    //sends data vaiprops to the scriptshow page
    props.addNewShotFunction(completeshot)
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <h3>Current Script is {scriptName}</h3>
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
    <button type="button" className="learn more button">CLICK HERE TO ADD A STORY BOARD SHOT TO THE SHOT</button>
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

//   const ShotForm = (props) => {
    
//     const id = props.script_id
//     const scriptName = props.scriptName[0]
    
//     const [newShot, setNewShot] = useState({
//     shot_number: "",
//     description: "",
//     dialogue: "",
//     notes: "",
//     story_board_photo: ""
//   })

//   const handleChange = (event) => {
    
//     setNewShot({
//       ...newShot,
//       [event.currentTarget.name]: event.currentTarget.value
//     })
//   }

//   const handleFileUpload = (acceptedFiles) => {
//     setNewShot({
//       ...newShot,
//       image: acceptedFiles[0]
//     })
//   }

//   const handleSubmit = (event) => {
    
//     event.preventDefault()
//     let completeshot = new FormData()
//     completeshot.append("shot_number",newShot.shot_number)
//     completeshot.append("description",newShot.description)
//     completeshot.append("dialogue",newShot.dialogue)
//     completeshot.append("notes",newShot.notes)
//     completeshot.append("story_board_photo",newShot.story_board_photo)

//       fetch(`/api/v1/scripts/${id}/shots`, {
//             method: "POST",
//             body: completeshot,
//             credentials: "same-origin",
//             headers: {
//               'Accept': 'application/json',
//               'Accept': 'image/jpeg'
//         }
        
            
//           })
//           .then (response => {
//           if (response.ok) {
//             return response
//           } else {
//             let errorMessage = `${response.status} (${response.statusText})`,
//               error = new Error(errorMessage)
//             throw error
//           }
//         })
        
//       }
    
//   return (
    
//     <form onSubmit={handleSubmit}>
//       <h3>Current Script is {scriptName}</h3>
//       <label>
//         Shot Number:
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
//     <button type="button" class="learn more button">CLICK HERE TO ADD A STORY BOARD SHOT TO THE SHOT</button>
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







