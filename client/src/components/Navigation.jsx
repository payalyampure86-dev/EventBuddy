import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <span className="logo-icon">🎉</span>
        <h2>EventBuddy</h2>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Right Side */}
     <div className="nav-buttons">

  <Link to="/login" className="login-btn">
    Login
  </Link>

  <Link to="/register" className="signup-btn">
    Sign Up
  </Link>

</div>

    </nav>
  );
}

export default Navigation;