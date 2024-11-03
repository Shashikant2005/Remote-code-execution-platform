import React, { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';

const Header3 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" p-3 bg-white">
            <div className="flex items-center justify-between  text-blue-400">
                <h2 className="text-black text-xl ml-2">CodeCraft</h2>
                <div className="hidden md:flex gap-3 space-x-4 mx-5">
                    <Link to="/" className="text-black ">Home</Link>
                    <NavLink to="/main_editor" className="text-black ">languages</NavLink>
                    <NavLink to="/live_preview" className="text-black ">Live-Preview</NavLink>
                    <NavLink to="/whiteboard" className="text-black ">Whiteboard</NavLink>
                    {/* <NavLink to="/contact" className="text-black ">Contact</NavLink> */}
                
                </div>
                <button 
                    className="md:hidden text-black focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden mt-2">
                    <NavLink to="/" className="block text-black py-2 hover:underline">Home</NavLink>
                    <NavLink to="/main_editor" className="block text-black py-2 hover:underline">languages</NavLink>
                    <NavLink to="/live_preview" className="block text-black py-2 hover:underline">Live-Preview</NavLink>
                    <NavLink to="/whiteboard" className="block text-black py-2 hover:underline">Whiteboard</NavLink>
                    {/* <NavLink to="/contact" className="block text-black py-2 hover:underline">Contact</NavLink> */}
               
                </div>
            )}
        </nav>
    );
};

export default Header3;
