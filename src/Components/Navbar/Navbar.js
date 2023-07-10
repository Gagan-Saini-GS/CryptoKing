import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-section">
        <img src="./images/logo.png" alt="logo" className="logo-img" />
        <div className="company-name">Crypto King</div>
      </div>
      <ul className="menu-section">
        <Link to={"/"}>
          <li className="menu-item">Home</li>
        </Link>
        <Link to={"/allcoins"}>
          <li className="menu-item">Coins</li>
        </Link>
        <Link to={"/about"}>
          <li className="menu-item">About</li>
        </Link>
        <Link to={"/contact"}>
          <li className="menu-item">Contact</li>
        </Link>
      </ul>
    </div>
  );
}
