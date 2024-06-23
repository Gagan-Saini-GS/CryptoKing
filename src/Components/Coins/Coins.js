import React from "react";
import HeroSection from "../common/HeroSection";
import CoinDashboard from "./CoinDashboard";
import AllCoins from "./AllCoins";
import HowItWorks from "../HowItWorks/HowItWorks";
import Footer from "../Footer/Footer";
import { changeFilter } from "../../util/changeFilter";

export default function Coins({ isLoading, topCoins, allCoins }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-Darkblack">
      {isLoading && (
        <div className="fullscreen-loader">
          <div className="spinner"></div>
        </div>
      )}
      <div id="home">
        <HeroSection />
      </div>
      <CoinDashboard topCoins={topCoins} changeFilter={changeFilter} />
      <div id="cointable">
        <AllCoins allCoins={allCoins} changeFilter={changeFilter} />
      </div>
      <HowItWorks />
      <Footer />
      <div className="bg-Black text-LightGray px-4 sm:px-8 md:px-16 lg:px-24 py-4 font-medium text-xs text-center sm:text-base sm:text-left">
        ©️{currentYear} Crypto King All Rights Reserved by{" "}
        <span className="text-Blue">Gagan Saini</span>
      </div>
    </div>
  );
}
