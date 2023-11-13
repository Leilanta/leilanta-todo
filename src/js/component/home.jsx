import React , {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue,setInputValue] = useState ("");
	const [todos,setTodos] = useState ([]);
	const deleteTodo = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	  };
	const [item, setItem ] = useState('items');

	return (
	
		<div className="container justify-content-center bg-light rounded-3 p-5 m-5 shadow">
			<h1 className="d-flex justify-content-center mb-5">To-do's</h1>
			<div className="row justify-content-center">
			<ul className="col justify-content-center">
				<li>
				<textarea

					onChange={(e)=>setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => {
						if (e.key === "Enter"){
							setTodos(todos.concat(inputValue));
							setInputValue ("");
						} else if (todos.length === 0) {
								setItem(" tasks, add a task")
						} else {
								setItem('items')
							}
						}
					}
					placeholder="You go, girl!">

					</textarea>
				</li>
				{todos.map((item,index) => (
				<li
				className="submittedTodos">
					{item} <a
					className="icono d-flex justify-content-end"
					onClick={() => deleteTodo(index)}
					>🗑️</a>
					{""}	
				</li>
				))}
			</ul>
			<p
			
			> {todos.length} {item}</p>
			</div>
		</div>
	
	
	);
};

export default Home;
