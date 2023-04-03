import React, { useState } from 'react'
import TaskCreate from './TaskCreate';

const TaskShow = ({ task, onDelete, onUpdate }) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        onDelete(task.id)
    }

    const handleUpdate = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setShowEdit(false)
        onUpdate(id, updatedTitle, updatedTaskDesc)
    }

    return (
        <div className='task__show'>
            {showEdit ? <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit}/> : 
            <div>
                <h3>Vezifeniz</h3>
                <p>{task.title}</p>
                <h3>Edilecekler</h3>
                <p>{task.taskDesc}</p>

                <div>
                    <button onClick={handleDelete} id='delete'>Sil</button>
                    <button onClick={handleUpdate} id='update'>Guncelle</button>
                </div>
            </div>
            }

        </div>
    )
}

export default TaskShow