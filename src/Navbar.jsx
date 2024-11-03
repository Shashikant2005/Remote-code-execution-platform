import React from 'react'; 
import Select from 'react-select'; 
import './Navbar.css'; 


const Navbar = ({ userLang, setUserLang, userTheme, 
	setUserTheme, fontSize, setFontSize }) => { 
	 const languages = [ 
	 	{ value: "c", label: "C" }, 
	 	{ value: "cpp", label: "C++" }, 
	 	{ value: "python", label: "Python" }, 
	 	{ value: "java", label: "Java" }, 
		 { value: "js", label: "JS" }, 
	 ]; 
	const themes = [
		{ value: "vs-dark", label: "Dark" },
		{ value: "light", label: "Light" },
		{ value: "high-contrast", label: "High Contrast" },
		  { value: "hc-black", label: "High Contrast Black" }
	];
	return ( 
		<div className="flex flex-row gap-3 px-3 py-3 bg-gray-800 text-white " > 
			{/* <h1 className='hidden md:block text-xl font-bold mb-2 md:mb-0'>Start Code Now</h1>  */}

			{ <Select className='text-black' options={languages} value={userLang} 
				onChange={(e) => setUserLang(e.value)} 
				placeholder={userLang} />  }
			<Select className='text-black' options={themes} value={userTheme} 
				onChange={(e) => setUserTheme(e.value)} 
				placeholder={userTheme} /> 
			<label className='hidden md:block text-lg rounded-lg text-center font-bold mb-2 md:mb-0 pb-1 px-2'>Font Size</label> 
			<input type="range" min="18" max="30" className='hidden md:block text-xl font-bold mb-2 md:mb-0'
				value={fontSize} step="2"
				onChange={(e) => { setFontSize(e.target.value) }} /> 
				
		</div> 
	) 
} 

export default Navbar
