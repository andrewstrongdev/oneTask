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
        <div>
            {props.currentTasks.length ?
             <div>
             <h1>{props.currentTasks[0].title}</h1>
            <h2>{props.currentTasks[0].note}</h2>
            <button onClick={() => props.deleteTask()}> Delete </button>
            </div> :
             <div>
                <h1>all done</h1>
            </div>}
        </div>
    )
}