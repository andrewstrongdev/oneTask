import axios from 'axios'
import React from 'react'


export default function Taskcard(props) {

   
    

    // const [currentTasks, setCurrentTasks] = React.useState([])

    // const deleteTask = () => {
    //     axios.delete('http://localhost:4747/api/task')
    //       .then(res => setCurrentTasks(res.data))
    //   }
      

    //   React.useEffect(function(){
          
    //       axios.get('http://localhost:4747/api/tasks').then(res => setCurrentTasks(res.data))
        
    //   },[])

    return (
        <div className="card--main">
            {props.currentTasks.length ?
             <div>
             <h1 className="card--task">{props.currentTasks[0].title}</h1>
            <h2 className="card--note">{props.currentTasks[0].note}</h2>
            <button className="card--button" onClick={() => props.deleteTask()}> Complete Task </button>
            </div> :
             <div>
                <h1 className="card--task">Ooooh boy! I sure got alot done today!</h1>
            </div>}
        </div>
    )
}