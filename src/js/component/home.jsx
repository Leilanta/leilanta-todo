import React , {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue,setInputValue] = useState ("");
	const [todos,setTodos] = useState ([]);

	return (
		<div className="container m-5 shadow">
			<h1 className="d-flex justify-content-center mb-5">Cosas qué hacer:</h1>
			<div className="row justify-content-center">
			<ul className="col justify-content-center">
				<li>
				<input
					type="text"
					onChange={(e)=>setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => {
						if (e.key === "Enter"){
							setTodos(todos.concat(inputValue));
							setInputValue ("");
						}
					}}
					placeholder="¿Qué vamos a procrastinar hoy?">
					</input>
				</li>
				{todos.map((item) => (
				<li>
					{item} <a>🗑️</a>
					{""}	
				</li>
				))}
			</ul>
			<p className="mp-5">{todos.length} items left</p>
			</div>
		</div>
	);
};

export default Home;
