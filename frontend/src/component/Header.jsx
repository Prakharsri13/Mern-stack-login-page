import React from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <p>Enrollment Page</p>
      </div>
      <div className="nav-menu" id="navMenu">
        <ul>
          <li><Link to="/Signup" className ="link">Contact</Link></li>
          <li><Link to="/Services" className ="link">Services</Link></li>
          <li><Link to="/About" className ="link">About Us</Link></li>
        </ul>
      </div>
      <div className="nav-menu-btn">
        <i className="bx bx-menu" onClick={() => {}}></i>
      </div>
    </nav>
  );
};

export default Header;
