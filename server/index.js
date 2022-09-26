
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {addTask, deleteTask, getTasks} = require('./controller')

app.post('/api/task', addTask)
app.delete('/api/task', deleteTask)
app.get('/api/tasks', getTasks)

app.listen(4747, () => console.log(`Server is live on 4747!`))
