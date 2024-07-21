import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../Header/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">
            <img src={logo} alt="logo" />
            <span>Savante</span>
          </a>
        </div>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>
      <ul className={`nav__links ${isOpen ? "open" : ""}`} id="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="#">About Us</Link>
        </li>
        <li>
          <Link to="#">Contact Us</Link>
        </li>
        <div className="header__btn">
          <Link exact to="/login">
            <button className="btn">Login</button>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
