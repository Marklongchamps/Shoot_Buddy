import React, { useState, useEffect } from "react"

const TakeForm = (props) => {

  const [newtake, setNewTake] = useState({
    take: "",
    })

  const handleChange = (event) => {
    setNewTake({
      ...newtake,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewTakeFunction(newtake)
    setNewTake({
    take: "",
    
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Take
        <input
          name="take"
          id="take"
          type="text"
          onChange={handleChange}
          value={newtake.take}
        />
      
          </label>

      <div>
        <input type="submit" value="Enter New Take" />
      </div>
    </form>
  )
}

export default TakeForm


