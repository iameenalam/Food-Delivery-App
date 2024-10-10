import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets"; // Ensure the logout icon is imported from assets
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => { // Add onLogout prop
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <h2>Cravin'</h2>
        </div>
        <h6>Admin Panel</h6>
      </Link>
      <img
        className="logout-icon"
        src={assets.logout_icon} // Use the logout icon from assets
        alt="Logout"
        onClick={onLogout} // Call the logout function on click
        style={{ cursor: "pointer" }} // Change cursor to pointer
      />
    </div>
  );
};

export default Navbar;
