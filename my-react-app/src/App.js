// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

	const [data, setdata] = useState({
		name: "",
		yrsofprogramming: 0,
		date: "",
		languages: "",
	});


	useEffect(() => {

		fetch("/data").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					name: data.Name,
					yrsofprogramming: data.yrsofprogramming,
					date: data.Date,
					languages: data.languages,
				});
			})
		);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>React with Flask API</h1>
				<p>This React app is configured with Flask to pull a dictionary convert it into JSON and then display it on the DOM</p>
				<p>{data.name}</p>
				<p>{data.yrsofprogramming}</p>
				<p>{data.date}</p>
				<p>{data.languages}</p>

			</header>
		</div>
	);
}

export default App;
