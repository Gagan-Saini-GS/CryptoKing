import React, { useEffect, useState } from "react";
import { formatNumber, formatPrice } from "../../util/priceFormatter";
import OptionNavbar from "../Navbar/OptionNavbar";
import { FilterNavOptions } from "../../constant";
import { useNavigate } from "react-router-dom";

const CoinDashboardCard = ({
  active,
  setActiveCoin,
  id,
  name,
  symbol,
  image,
  currentPrice,
  currenyType,
  marketCap,
  pecentageChange,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`p-4 rounded-xl hover:bg-Gray w-full md:w-2/5 lg:w-1/5 h-36 cursor-pointer ${
        active && "bg-Gray"
      }`}
      style={{ boxShadow: "0 0 10px 0 rgba(255,255,255,0.1)" }}
      onClick={() => {
        setActiveCoin(id);
        navigate("/coin/" + id);
      }}
    >
      <div className="flex items-center gap-2">
        <img src={image} alt="Coin Image" className="w-8 h-8" />
        <div className="text-base font-semibold hover:text-Blue max-w-64 text-nowrap overflow-hidden text-ellipsis">
          {name}
        </div>
        <div className="font-medium text-base text-LightGray">
          {symbol.toUpperCase()}/{currenyType}
        </div>
      </div>
      <div className="text-2xl font-bold text-White py-6">
        {formatPrice(currentPrice, currenyType)}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-LightGray">Market Cap.</span>{" "}
          <span className="text-White font-semibold">
            ${formatNumber(marketCap)}
          </span>
        </div>
        <div
          className={`${
            pecentageChange > 0 ? "bg-Green" : "bg-Red"
          } px-2 py-1 rounded text-White text-sm font-medium`}
        >
          {pecentageChange > 0 && "+"}
          {pecentageChange.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

const CoinDashboard = ({ topCoins, changeFilter }) => {
  const [activeCoin, setActiveCoin] = useState("");
  const [coinArr, setCoinArr] = useState([]);

  useEffect(() => {
    if (topCoins && topCoins.length > 0) {
      setActiveCoin(topCoins[1].id);
      setCoinArr(topCoins);
    }
  }, [topCoins]);

  return (
    <div className="lg:block relative bg-Black -top-20 text-White mx-4 sm:mx-8 md:mx-16 lg:mx-24 px-2 md:px-8 py-2 border-2 border-Gray rounded-md md:rounded-xl lg:rounded-3xl min-h-fit shadow-sm shadow-Blue">
      <OptionNavbar
        options={FilterNavOptions}
        changeFilter={changeFilter}
        coinArr={coinArr}
        setCoinArr={setCoinArr}
      />
      <div className="flex flex-wrap items-center gap-4 md:gap-10 pt-4 md:pt-5 md:pb-4">
        {coinArr.map((coin) => (
          <CoinDashboardCard
            key={coin.id}
            id={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            price={coin.price}
            currentPrice={coin.current_price}
            pecentageChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
            currenyType={"USD"}
            active={coin.id === activeCoin}
            setActiveCoin={setActiveCoin}
          />
        ))}
      </div>
    </div>
  );
};

export default CoinDashboard;
