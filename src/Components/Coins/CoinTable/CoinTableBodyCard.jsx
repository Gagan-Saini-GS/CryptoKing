import React from "react";
import { RxStar, RxStarFilled } from "react-icons/rx";
import { formatPrice } from "../../../util/priceFormatter";
import { useNavigate } from "react-router-dom";

const CoinTableBodyCard = ({
  id,
  index,
  currencyLogo,
  name,
  symbol,
  currentPrice,
  lowPrice,
  highPrice,
  pecentageChange,
  marketCap,
  graph,
  isFavourite = false,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="border-b border-Gray py-4 w-full flex items-center cursor-pointer font-semibold text-White text-lg hover:bg-Gray hover:bg-opacity-50"
      onClick={() => navigate("/coin/" + id)}
    >
      <div className="w-[4%]">
        {isFavourite ? (
          <RxStarFilled className="w-4 h-4 text-yellow-300 ml-2" />
        ) : (
          <RxStar className="w-4 h-4 text-LightGray ml-2" />
        )}
      </div>
      <div className="w-[4%]">{index}</div>
      <div className="w-[5%]">
        <img
          src={currencyLogo}
          alt="Currency_Logo"
          className="rounded-full w-8 h-8"
        />
      </div>
      <div className="w-[23%]">
        <span className="hover:text-Blue cursor-pointer max-w-72 text-ellipsis overflow-hidden text-nowrap">
          {name}
        </span>{" "}
        <span className="text-LightGray">{symbol.toUpperCase()}</span>
      </div>
      <div className="w-[8%]">{formatPrice(currentPrice, "USD")}</div>
      <div className="w-[8%] text-Red">{formatPrice(lowPrice, "USD")}</div>
      <div className="w-[8%] text-Green">{formatPrice(highPrice, "USD")}</div>
      <div
        className={`w-[8%] ${pecentageChange > 0 ? "text-Green" : "text-Red"}`}
      >
        {pecentageChange > 0 ? "+" : ""}
        {pecentageChange.toFixed(2)}%
      </div>
      <div className="w-[16%]">{formatPrice(marketCap, "USD")}</div>
      <div className="w-[10%]">
        <img src={graph} alt="Market Chart" />
      </div>
      <div className="w-[10%]">
        <button className="border-2 border-LightGray rounded-full px-4 py-1 font-semibold hover:bg-Blue hover:border-Blue hover:text-White transition-all duration-150 ease-in-out ml-4">
          Trade
        </button>
      </div>
    </div>
  );
};

export default CoinTableBodyCard;
