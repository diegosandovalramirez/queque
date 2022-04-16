// index.js
const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

const PORT = process.env.SERVER_PORT

//middleware
app.use(cors())
app.use(express.json())

//get all "todos"
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query(
            "SELECT * FROM todos ORDER BY id"
        )
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a single "todo"
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query(
            "SELECT * FROM todos WHERE id = $1",
            [id]
        )
        res.json(todo.rows[0])
    } catch (err) {
        console.log(err)

    }
})

//create a "todo"
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query(
            "INSERT INTO todos(description) VALUES($1) RETURNING *",
            [description]
        )
        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update a "todo"
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const updateTodo = await pool.query(
            "UPDATE todos SET description = $1 WHERE id = $2",
            [description, id]
        )
        console.log(updateTodo)
        res.json("Todo was updated")
    } catch (err) {
        console.log(err)

    }
})

//delete a "todo"
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await pool.query(
            "DELETE FROM todos WHERE id = $1",
            [id]
        )
        console.log(deleteTodo)
        res.json("todo was deleted")
    } catch (err) {
        console.error(err)

    }
})

app.listen(PORT, () => {
	console.log("servidor iniciado en puerto " + PORT)
})
