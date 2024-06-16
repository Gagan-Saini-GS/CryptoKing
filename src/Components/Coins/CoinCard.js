import React from "react";
// import "./CoinCard.css";
import { Link } from "react-router-dom";

export default function CoinCard({ coin, type }) {
  function openCoin() {
    console.log(coin);
  }

  return (
    <>
      <Link to={"/coin/" + coin?.id}>
        <div
          className={
            type === "all"
              ? "all-coin-card-container"
              : "top-coin-card-container"
          }
        >
          <div
            className={type === "all" ? "all-name-section" : "top-name-section"}
          >
            <img src={coin?.image} alt="coin-image" className="coin-img" />
            <div className="coin-symbol">{coin?.symbol}</div>
            <div className="coin-name">{coin?.name}</div>
          </div>
          <div
            className={
              type === "all" ? "all-price-section" : "top-price-section"
            }
          >
            <div className="coin-price">
              {type === "top" && <div className="price-heading">Price</div>}₹{" "}
              {coin?.current_price}
            </div>
            <div className="coin-total-volume">
              {type === "top" && <div className="price-heading">Volume</div>}{" "}
              {coin?.total_volume}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
