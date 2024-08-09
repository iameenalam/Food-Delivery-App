import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <h2>Cravin'</h2>
        </div>
        <h6>Admin Panel</h6>
      </Link>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
