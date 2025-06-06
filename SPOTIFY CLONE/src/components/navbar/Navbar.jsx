import React from 'react';
import './navbar.css';
import { FaHome, FaSearch, FaSpotify } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaSpotify className="spotify-icon" />
        <FaHome className="icon" />
        <FaSearch className="icon" />
        <input type="text" placeholder="What do you want to play?" />
      </div>

      <div className="navbar-right">
        <a className="nav-link" href="#">Premium</a>
        <a className="nav-link" href="#">Support</a>
        <a className="nav-link" href="#">Download</a>
        <div className="divider" />
        <button className="signup-btn" onClick={handleSignupClick}>Sign up</button>
        <button className="login-btn" onClick={handleLoginClick}>Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
