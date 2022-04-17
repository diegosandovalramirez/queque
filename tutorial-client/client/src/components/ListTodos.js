import React, {Fragment, useState, useEffect} from "react";
import EditTodo from "./EditTodos";

const ListTodos = () => {

	const [todos, setTodos] = useState([]);

	// deleteTodo func:

	async function deleteTodo(id) {
		try {
			await fetch(`http://localhost:3001/todos/${id}`, {
				method: "DELETE"
			});

			setTodos(todos.filter(todo => todo.id !== id));
		} catch (err) {
			console.error(err.message);
		}
	}

	async function getTodos() {
		const res = await fetch("http://localhost:3001/todos");

		const todoArray = await res.json();
		
		setTodos(todoArray);
	}

	useEffect(() => {
		getTodos();
	}, [])

	return (
		<Fragment>
		{" "}
		<h1> <table className="table">
		<thead>
		<tr>
		  <th>Descripción</th>
		  <th>Editar</th>
		  <th>Eliminar</th>
		</tr>
		</thead>
		<tbody>
		{
			todos.map(todo => (
				<tr key={todo.id}>
				<td>{todo.description}</td>
				<td><EditTodo todo={todo}/></td>
				<td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Eliminar</button></td>
				</tr>
			))
		}
		</tbody>
	  </table> </h1>
	  
	  </Fragment>
	)
}

export default ListTodos;
