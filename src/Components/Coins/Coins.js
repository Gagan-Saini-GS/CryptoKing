import React, { useState, useEffect } from "react";
// import "./Coins.css";
import HeroSection from "../common/HeroSection";
import CoinDashboard from "./CoinDashboard";
import AllCoins from "./AllCoins";
import HowItWorks from "../HowItWorks/HowItWorks";
import Footer from "../Footer/Footer";
import { changeFilter } from "../../util/changeFilter";

export default function Coins() {
  const [allCoins, setAllCoins] = useState([]);
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => res.json())
      .then((response) => {
        response = response.sort((a, b) => b?.current_price - a?.current_price);
        const newTopCoins = response.splice(0, 4);
        setTopCoins(newTopCoins);
        setAllCoins(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-Darkblack">
      <HeroSection />
      <CoinDashboard topCoins={topCoins} changeFilter={changeFilter} />
      <AllCoins allCoins={allCoins} changeFilter={changeFilter} />
      <HowItWorks />
      <Footer />
      <div className="bg-Black text-LightGray px-4 sm:px-8 md:px-16 lg:px-24 py-4 font-medium text-xs text-center sm:text-base sm:text-left">
        ©️{currentYear} Crypto King All Rights Reserved by{" "}
        <span className="text-Blue">Gagan Saini</span>
      </div>
    </div>
  );
}
