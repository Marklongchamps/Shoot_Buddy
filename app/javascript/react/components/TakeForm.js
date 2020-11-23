import React, { useState, useEffect } from "react"
import Timer from "./Timer"

const TakeForm = (props) => {

  const [newtake, setNewTake] = useState({
    take: "",
    time:""
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
        
        <label>
          
          
        <Timer/>
        
        </label>

      <div>
        <input type="submit" value="Enter New Take" />
      </div>
    </form>
  )
}

export default TakeForm








