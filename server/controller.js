const tasks = require('./taskarray.json')
let id = 4

module.exports = {
    addTask: (req, res) => {
        const {title, note} = req.body

        const newTask = {
            id,
            title,
            note
        }
        id++

        tasks.push(newTask)
        console.log('you added a task!', newTask)

        res.status(200).send(tasks)

    },
    deleteTask: (req, res) => {
        tasks.splice(0,1)
        console.log('you deleted a task!', tasks)
        res.status(200).send(tasks)
    },
    getTasks: (req, res) => {
        res.status(200).send(tasks)
    }
    
}


