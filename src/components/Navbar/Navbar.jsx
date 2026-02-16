import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import logoImage from '../../assets/logo.png';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? 'navbar-show' : 'navbar-hide'}`}>
      <div className="navbar-container">

        <div className="navbar-logo">
          <img src={logoImage} alt="logo" className="logo-img" />
        </div>

        <div className="navbar-right">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-button">Sign Up</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
