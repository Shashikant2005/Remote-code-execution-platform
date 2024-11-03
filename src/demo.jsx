import { useState } from 'react'; 
import './main_editor.css'; 
import Editor from "@monaco-editor/react"; 
import Axios from 'axios'; 
import spinner from './assets/spinner.svg';
import React from 'react';
import Navbar from './Navbar';

function Main_editor() { 
	const [userCode, setUserCode] = useState(``); 

	// State variable to set editors default language 
	const [userLang, setUserLang] = useState("python"); 

	// State variable to set editors default theme 
	const [userTheme, setUserTheme] = useState("vs-dark"); 

	// State variable to set editors default font size 
	const [fontSize, setFontSize] = useState(20); 

	// State variable to set users input 
	const [userInput, setUserInput] = useState(""); 

	// State variable to set users output 
	const [userOutput, setUserOutput] = useState(""); 

	// Loading state variable to show spinner 
	// while fetching data 
	const [loading, setLoading] = useState(false); 

	const options = { fontSize: fontSize };

	function compile() { 
		setLoading(true); 

		if (userCode === ``) { 
			setLoading(false); 
			return;
		} 

		const data = { 
			language: userLang, 
			stdin: userInput,
			files: [
				{ name: `index.${userLang}`, content: userCode }
			]
		};

		const config = { 
			method: 'post', 
			url: 'https://onecompiler-apis.p.rapidapi.com/api/v1/run',
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': 'c7fa03d1dcmsh0abec7a494a0b36p1d6413jsn20ac5ac76fd5',
				'X-RapidAPI-Host': 'onecompiler-apis.p.rapidapi.com'
			}, 
			data: data 
		}; 

		Axios(config) 
			.then((response) => { 
				// Check for output in the response
				if (response.data.stderr === null) {
					setUserOutput(response.data.stdout); 
				} else {
					setUserOutput(response.data.stderr); 
				}
			})
			.catch((error) => { 
				console.log('Error:', error); 
				setUserOutput('Error occurred during compilation.'); // Optional: set an error message for the user
			})
			.finally(() => {
				setLoading(false); // Ensure loading state is updated
			});
	}

	function clearOutput() { 
		setUserOutput(""); 
	} 

	return ( 
		<div className="App"> 
			<Navbar 
				userLang={userLang} 
				setUserLang={setUserLang} 
				userTheme={userTheme} 
				setUserTheme={setUserTheme} 
				fontSize={fontSize} 
				setFontSize={setFontSize} 
			/> 

			<div className="flex flex-col md:flex-row main"> 
				<div className="left-container flex-1"> 
					<Editor 
						options={options} 
						height="60vh" // Set a specific height for better visibility
						width="100%"
						theme={userTheme} 
						language={userLang} 
						defaultLanguage="python"
						defaultValue="# Enter your code here"
						onChange={(value) => { setUserCode(value) }} 
					/> 
					<button className="run-btn" onClick={compile}> 
						Run 
					</button> 
				</div> 

				<div className="right-container flex-1 flex flex-col"> 
					<h4>Input:</h4> 
					<div className="input-box mb-2"> 
						<textarea 
							id="code-inp" 
							onChange={(e) => setUserInput(e.target.value)} 
							className="w-full h-32 border border-gray-300 p-2"
							placeholder="Enter your input here..."
						/> 
					</div> 

					<h4>Output:</h4> 
					{loading ? ( 
						<div className="spinner-box"> 
							<img src={spinner} alt="Loading..." /> 
						</div> 
					) : ( 
						<div className="output-box flex-1 border border-gray-300 p-2"> 
							<pre>{userOutput}</pre> 
							<button onClick={clearOutput} className="clear-btn"> 
								Clear 
							</button> 
						</div> 
					)} 
				</div> 
			</div> 
		</div> 
	); 
} 

export default Main_editor;
