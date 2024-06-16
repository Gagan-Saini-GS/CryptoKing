import React from "react";

const CoinTableHead = () => {
  return (
    <div className="min-w-[1440px] lg:min-w-[1220px] bg-Darkblack">
      <div className="border-b-2 border-LightGray h-10 w-full flex items-center font-bold text-xl pb-1">
        <div className="w-[4%]"></div>
        <div className="w-[4%]">#</div>
        <div className="w-[5%]">Logo</div>
        <div className="w-[23%]">Name</div>
        <div className="w-[8%]">Price</div>
        <div className="w-[8%]">24h Low</div>
        <div className="w-[8%]">24h High</div>
        <div className="w-[8%]">24h %</div>
        <div className="w-[16%]">Market Cap</div>
        <div className="w-[10%]">Last 7 days</div>
        <div className="w-[10%]"></div>
      </div>
    </div>
  );
};

export default CoinTableHead;
