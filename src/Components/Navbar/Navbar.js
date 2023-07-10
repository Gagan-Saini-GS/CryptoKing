import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [searchTxt, setSearchTxt] = useState("");
  const navigate = useNavigate();

  function searchCoin() {
    navigate("/coin/" + searchTxt.toLowerCase());

    setSearchTxt("");
  }

  return (
    <div className="navbar-container">
      <div className="logo-section">
        <img src="/images/logo.png" alt="logo" className="logo-img" />
        <div className="company-name">Crypto King</div>
      </div>
      <div className="right-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Coin"
            value={searchTxt}
            className="search-input"
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <img src="/images/search3.png" alt="" onClick={searchCoin} />
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
    </div>
  );
}
