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
            <input placeholder='title' onChange={e => setTitle(e.target.value)}/>
            <input placeholder='note' onChange={e => setNote(e.target.value)}/>
            <button onClick={() => addTask()}>Add note</button>
        </div>
)}