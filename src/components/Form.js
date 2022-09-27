import { useState } from 'react'
import axios from 'axios'

export default function Form(props) {
    const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const addTask = () => {
    axios.post('http://localhost:4747/api/task', {title, note})
      .then(res => props.getAllTasks())
  }
    return(
        <div className="form--div">
            <input className="form--input" placeholder='New task' onChange={e => setTitle(e.target.value)}/>
            <input className="form--input" placeholder='New note' onChange={e => setNote(e.target.value)}/>
            <button className="form--button" onClick={() => addTask()}>Add task</button>
        </div>
)}