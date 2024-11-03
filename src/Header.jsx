
import { NavLink } from 'react-router-dom';

function Header() {
  
  return (
    <div>

      
      <ul className='flex gap-10 justify-center bg-gray-500 p-4  '>
        <li>
          <NavLink 
            to='/' 
            className={({ isActive }) => (isActive ? 'bg-green-300' : '') + ' px-4 py-2 rounded'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/main_editor" 
            className={({ isActive }) => (isActive ? 'bg-green-300' : '') + ' px-4 py-2 rounded'}
          >
            Languages
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/live_preview" 
            className={({ isActive }) => (isActive ? 'bg-green-300' : '') + ' px-4 py-2 rounded'}
          >
            Live-Preview
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/whiteboard" 
            className={({ isActive }) => (isActive ? 'bg-green-300' : '') + ' px-4 py-2 rounded'}
          >
            Whiteboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'bg-green-300' : '') + ' px-4 py-2 rounded'}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      
    </div>
  );
}

export default Header;
