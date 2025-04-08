import React from 'react';
import logo from '../icons/Preview.png';
import "../Pages/Nav.css"; // Import the CSS file
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navLinks">
        <li className="navItem"><Link to="/home" className="navLink">Home</Link></li>
        <li className="navItem"><Link to="/contact"  className="navLink">Contact</Link></li>
        <li className="navItem"><Link to="/about" className="navLink">About</Link></li>
        <li className="navItem"><Link to="/reservation" className="navLink">Reservation</Link></li>
        <li className="navItem"><Link to="/login" className="navLink">Login</Link></li>
        <li className="navItem"><Link to="/signup" className="navLink">SignUp Now!</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
