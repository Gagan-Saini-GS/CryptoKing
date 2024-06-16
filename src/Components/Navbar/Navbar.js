import React, { useState } from "react";
import Logo from "../../assets/images/usd-coin.png";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../common/SearchBar";

export default function Navbar() {
  const [searchTxt, setSearchTxt] = useState("");
  const navigate = useNavigate();

  const searchCoin = () => {
    navigate("/coin/" + searchTxt.toLowerCase());
    setSearchTxt("");
  };

  return (
    <nav
      className="bg-Darkblack flex justify-between items-center h-16 md:h-20 px-4 sm:px-8 md:px-16 lg:px-24 sticky top-0 z-50"
      style={{ boxShadow: "0 0 10px 0 rgba(255, 255, 255, 0.15)" }}
    >
      <div className="flex items-center">
        <img className="h-8 w-auto mr-4" src={Logo} alt="Logo" />
        <div className="text-sm md:text-base lg:text-xl font-bold text-White">
          Crypto King
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <SearchBar
          searchTxt={searchTxt}
          setSearchTxt={setSearchTxt}
          searchCoin={searchCoin}
        />
        <Link to={"/"}>
          <div className="text-White hover:text-Blue text-sm md:text-base lg:text-xl font-medium">
            Home
          </div>
        </Link>
        <Link to={"/allcoins"}>
          <div className="text-White hover:text-Blue text-sm md:text-base lg:text-xl font-medium">
            Coins
          </div>
        </Link>
      </div>
    </nav>
  );
}
