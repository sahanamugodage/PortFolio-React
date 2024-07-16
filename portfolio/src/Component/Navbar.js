import "./NavbarStyles.css";
import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>ProtFolio</h1>
      </Link>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to='/' onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to='/project' onClick={toggleMenu}>Project</Link>
        </li>
        <li>
          <Link to='/about' onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to='/contact' onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
      {isOpen ? <FaTimes size={20} style={{color:"#fff"}} /> : <FaBars size={20} style={{color:"#fff"}} />}
      </div>
    </div>
  );
}

export default Navbar;
