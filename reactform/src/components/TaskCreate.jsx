import React from 'react'
import { useState } from 'react'

const TaskCreate = ({onCreate}) => {
  const [title, setTitle] = useState("")
  const [taskDesc, setTaskDesc] = useState("")

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleTaskDescChange = (event) => {
    setTaskDesc(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc)
    setTitle('');
    setTaskDesc('');
  }

  return (
    <div>
      <h3>Task Elave edin</h3>
      <form>
        <label>Basliq</label>
        <input value={title} onChange={handleChange} type="text" />

        <label>Task Girin!</label>
        <textarea value={taskDesc} onChange={handleTaskDescChange} cols="30" rows="10"></textarea>

        <button onClick={handleSubmit}>Create</button>

      </form>
    </div>
  )
}

export default TaskCreate