import React from 'react'
import { useState } from 'react'

const TaskCreate = ({ onCreate, task, taskformUpdate, onUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : '')
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleTaskDescChange = (event) => {
    setTaskDesc(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskformUpdate) {
      onUpdate(task.id,title,taskDesc)
    } else {
      onCreate(title, taskDesc)
    }
    setTitle('');
    setTaskDesc('');
  }

  return (
    <div>
      {taskformUpdate ? <div className="task__update">
        <div>
          <h3>Task Update</h3>
          <form>
            <label>Basligi duzelt</label>
            <input value={title} onChange={handleChange} type="text" />

            <label>Taski duzelt </label>
            <textarea value={taskDesc} onChange={handleTaskDescChange} cols="30" rows="10"></textarea>

            <button id='updbtn' onClick={handleSubmit}>Guncelle</button>

          </form>
        </div>
      </div> :
        <div className="task__create">
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
        </div>}
    </div>

  )
}

export default TaskCreate