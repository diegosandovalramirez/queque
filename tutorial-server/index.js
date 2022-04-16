// index.js
const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

const PORT = process.env.SERVER_PORT

//middleware
app.use(cors())
app.use(express.json())

//get all todos
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

app.listen(PORT, () => {
	console.log("servidor iniciado en puerto " + PORT)
})
