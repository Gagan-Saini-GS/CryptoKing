import React, { useState, useEffect } from "react";
import "./Coins.css";
import CoinCard from "../CoinCard/CoinCard";

export default function Coins() {
  const [allCoins, setAllCoins] = useState([]);
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr")
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

  function changeFilter(e) {
    console.log(e.target.value);
    const filter = e.target.value;

    if (filter === "high-to-low") {
      const arr = [...allCoins].sort(
        (a, b) => b?.current_price - a?.current_price
      );
      setAllCoins(arr);
    } else if (filter === "low-to-high") {
      const arr = [...allCoins].sort(
        (a, b) => a?.current_price - b?.current_price
      );
      setAllCoins(arr);
    }
  }

  return (
    <div className="coin-container">
      <div className="market-section">
        <div className="all-coins">Market Leaders</div>
        <div className="coin-section">
          {topCoins?.map((coin) => {
            return <CoinCard key={coin?.id} coin={coin} type={"top"} />;
          })}
        </div>
      </div>
      <div className="heading-section">
        <div className="filter-section">
          <div className="all-coins">All Coins</div>
          <select onChange={changeFilter}>
            <option value="high-to-low">High to Low</option>
            <option value="low-to-high">Low to High</option>
          </select>
        </div>
        <div className="info-section">
          <div>Price</div>
          <div>Volume</div>
        </div>
      </div>
      <div className="coin-section">
        {allCoins?.map((coin) => {
          return <CoinCard key={coin?.id} coin={coin} type={"all"} />;
        })}
      </div>
    </div>
  );
}
