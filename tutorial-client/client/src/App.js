import React, { Fragment } from "react"
import InputTodo from "./components/InputTodos";
import './App.css';
//components
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
		<div className="container">
		  <InputTodo />
		  <br/>
		  <br/>
		  <br/>
		  <ListTodos />
		</div>
    </Fragment>
  );
}

export default App;
