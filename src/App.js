import { useState } from 'react'
import './App.css';
import axios from 'axios'
import Form from './components/Form'
import Taskcard from './components/Taskcard'
import React from 'react'

function App() {
  const [currentTasks, setCurrentTasks] = React.useState([])

  const deleteTask = () => {
    axios.delete('http://localhost:4747/api/task')
      .then(res => setCurrentTasks(res.data))
  }

  function getAllTasks() {
    axios.get('http://localhost:4747/api/tasks').then(res => setCurrentTasks(res.data))
  }

  React.useEffect(function(){

    getAllTasks()
          
    // axios.get('http://localhost:4747/api/tasks').then(res => setCurrentTasks(res.data))
  
},[])



  return (
    <div className="App">

        <Form 
          getAllTasks={getAllTasks}
        />
        <Taskcard 
          currentTasks={currentTasks}
          deleteTask={deleteTask}
        />
    </div>
  );
}

export default App;
