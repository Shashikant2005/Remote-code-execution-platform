import { useState } from 'react'; 
import './main_editor.css'; 
import Editor from "@monaco-editor/react"; 
import Axios from 'axios'; 
import spinner from './assets/spinner.svg';
import React from 'react'
import Navbar from './Navbar';


function Main_editor() { 

	const apiUrl = import.meta.env.VITE_CODE_COMPILATION_API;
	// State variable to set users source code 
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

	const options = { 
		fontSize: fontSize 
	} 

	// Function to call the compile endpoint 
	function compile() { 
		setLoading(true); 
	
		if (userCode === ``) { 
			setLoading(false); // Ensure loading is set to false if there's no code
			return;
		} 
	
		// Prepare the data object for the API request
		const data = { 
			language: userLang, 
			stdin: userInput,
			files: [
				{
					name: `index.${userLang}`, // Use userLang directly for the file extension
					content: userCode
				}
			]
		};
	
		// Set up the Axios configuration
		const config = { 
			method: 'post', 
			url: 'https://onecompiler-apis.p.rapidapi.com/api/v1/run',
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': apiUrl,
				'X-RapidAPI-Host': 'onecompiler-apis.p.rapidapi.com'
			}, 
			data: data 
		}; 
	
		// Call the code compilation API
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
	
	// Function to clear the output screen 
	function clearOutput() { 
		setUserOutput(""); 
	} 

	return ( 

		<div className="App"> 
	       
			<Navbar userLang={userLang} setUserLang={setUserLang} userTheme={userTheme} setUserTheme={setUserTheme} fontSize={fontSize} setFontSize={setFontSize} 
			/> 
			
			<div className="main"> 

				<div className="left-container"> 
					<Editor 
						options={options} 
						height="100vh"
						width="100%"
						theme={userTheme} 
						language={userLang} 
						defaultLanguage="python"
						defaultValue="# Enter your code here"
						onChange={(value) => { setUserCode(value) }} 
					/> 
					<button className="run-btn mb-3" onClick={() => compile()}> 
						Run 
					</button> 
				</div> 
				<div className="right-container"> 
					<h4>Input:</h4> 
					<div className="input-box"> 
						<textarea id="code-inp" onChange= 
							{(e) => setUserInput(e.target.value)}> 
						</textarea> 
					</div> 
					<h4>Output:</h4> 
					{loading ? ( 
						<div className="spinner-box"> 
							<img src={spinner} alt="Loading..." /> 
						</div> 
					) : ( 
						<div className="output-box"> 
							<pre>{userOutput}</pre> 
							<button onClick={() => { clearOutput("") }} 
								className="clear-btn"> 
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

