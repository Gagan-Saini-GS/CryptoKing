import React from "react";
import herosectionImage from "../../assets/images/hero-banner.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-Black px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-2/5 order-2 lg:order-1">
          <div className="text-4xl md:text-5xl lg:text-7xl font-semibold text-White text-left w-full leading-tight">
            <span className="text-Green">Buy</span> &{" "}
            <span className="text-Red">Sell</span> Digital Assets In The Crypto
            King
          </div>
          <div className="text-base md:text-lg lg:text-xl text-LightGray font-medium text-left w-full py-8">
            Coin King is the easiest, safest, and fastest way to buy & sell
            crypto asset exchange.
          </div>
          <button className="px-4 py-1 lg:px-8 lg:py-2 bg-Blue text-white rounded-full text-base md:text-lg lg:text-xl font-semibold mb-60 md:mb-20 lg:mb-0">
            Get Started
          </button>
        </div>
        <div className="w-full lg:w-3/5 order-1 lg:order-2 pb-10 lg:pb-0 pt-20 lg:pt-0">
          <img
            className="w-full h-full mt-20 lg:mt-0 shadow-md object-contain max-h-[150px] md:max-h-[300px] lg:max-h-[450px]"
            src={herosectionImage}
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
