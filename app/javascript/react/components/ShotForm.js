import React, { useState, useEffect } from "react"

const ShotForm = (props) => {

  const [newShot, setNewShot] = useState({
    shot_number: "",
    description: "",
    dialogue: "",
    notes: ""
  })

  const handleChange = (event) => {
    setNewShot({
      ...newShot,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewShotFunction(newShot)
    setNewShot({
    shot_number: "",
    description: "",
    dialogue: "",
    notes: ""
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Shot Number
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

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default ShotForm


