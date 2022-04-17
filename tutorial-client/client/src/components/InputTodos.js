import React, {Fragment, useState} from "react";

const InputTodo = () => {

	const [description, setDescription] = useState ("");
	const onSubmitForm = async e => {
		e.preventDefault();
		try {
			const body = { description };
			await fetch("http://localhost:3001/todos", {method: "POST", headers: {"content-type": "application/json"}, body: JSON.stringify(body)})
			window.location = "/";
		} catch (err) {
			console.log(err.message);
		}
	}
	return (
	<Fragment>
		<h1 className="text-center my-5">Lista TODO</h1>
		<form className="d-flex" onSubmit={onSubmitForm}>
			<input type="text" placeholder="add TODO" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
			<button>Add</button>
		</form>
	</Fragment>
	);
};

export default InputTodo;