import React, { useEffect, useState } from "react";
import "./CoinPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CoinPage() {
  const params = useParams();
  const [coin, setCoin] = useState();
  const [posLeft, setPosLeft] = useState("0px");

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + params?.coinId)
      .then((response) => {
        console.log(response.data);
        setCoin(response.data);

        // Calculating the position of tool tip according to low price, current price, high price
        const low = response?.data?.market_data?.low_24h?.inr;
        const high = response?.data?.market_data?.high_24h?.inr;
        const curr = response?.data?.market_data?.current_price?.inr;
        calculateLeftPosition(low, curr, high);
      })
      .catch((err) => console.log(err));
  }, [params?.coinId]);

  function calculateLeftPosition(low, curr, high) {
    let percentage = (curr - low) / (high - low);
    // For desktop 360px
    // const newPos = Math.ceil(percentage * 360) + "px"; // Same but I perfered below one

    percentage = percentage * 100;
    const newPos = (percentage / 100) * 410 + "px";

    setPosLeft(newPos);
  }

  return (
    <div className="coin-page-container">
      <div className="top-section">
        <img src={coin?.image?.large} alt="" />
        <div className="coin-info-section">
          <div className="coin-info-item">
            <div className="coin-info-item-key">Name</div>
            <div className="coin-info-item-value">{coin?.name}</div>
          </div>
          <div className="coin-info-item">
            <div className="coin-info-item-key">Symbol</div>
            <div className="coin-info-item-value symbol">{coin?.symbol}</div>
          </div>
          <div className="coin-info-item">
            <div className="coin-info-item-key">Price</div>
            <div className="coin-info-item-value">
              ₹ {coin?.market_data?.current_price?.inr} /-
            </div>
          </div>
          <div className="coin-info-item">
            <div className="coin-info-item-key">Total Volume</div>
            <div className="coin-info-item-value">
              {coin?.market_data?.total_volume?.inr}
            </div>
          </div>
          <div className="line-text">24 hours price range</div>
          <div className="coin-price-range-section">
            <div className="line">
              <div className="tooltip">
                <span className="tooltiptext" style={{ left: posLeft }}>
                  ₹ {coin?.market_data?.current_price?.inr}
                </span>
              </div>
              <input
                type="range"
                className="slider"
                min={"" + 10000000000 * coin?.market_data?.low_24h?.inr}
                max={"" + 10000000000 * coin?.market_data?.high_24h?.inr}
                value={"" + 10000000000 * coin?.market_data?.current_price?.inr}
                readOnly={true}
              />
            </div>
            {/* <div className="line-text">24 hours price range</div> */}
            <div className="price-range">
              <div className="low-price">
                <span>Low</span> ₹ {coin?.market_data?.low_24h?.inr} /-
              </div>
              <div className="high-price">
                <span>High</span> ₹ {coin?.market_data?.high_24h?.inr} /-
              </div>
            </div>
          </div>
          <div className="btn-section">
            <button className="btn buy-btn">buy</button>
            <button className="btn sell-btn">sell</button>
          </div>
        </div>
      </div>
      <div className="middle-section">
        {coin?.description?.en !== "" && (
          <>
            <h2>About {coin?.name}</h2>
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: coin?.description?.en }}
            ></p>
          </>
        )}
      </div>
      <div className="other-info-section">
        <h2>Data analysis of {coin?.name}</h2>
        <div className="other-info-item">
          Price change in a day{" "}
          <p className="other-info-item-value">
            {coin?.market_data?.price_change_24h < 0 ? (
              <span style={{ color: "#ff524c" }}>
                ₹ {coin?.market_data?.price_change_24h.toFixed(10)}
              </span>
            ) : (
              <span style={{ color: "#1fd895" }}>
                ₹ {coin?.market_data?.price_change_24h.toFixed(10)}
              </span>
            )}
          </p>
        </div>
        <div className="other-info-item">
          Market Capitalization change in a day{" "}
          <p className="other-info-item-value">
            {Math.floor(coin?.market_data?.market_cap_change_24h) < 0 ? (
              <span style={{ color: "#ff524c" }}>
                ₹ {Math.floor(coin?.market_data?.market_cap_change_24h)}
              </span>
            ) : (
              <span style={{ color: "#1fd895" }}>
                ₹ {Math.floor(coin?.market_data?.market_cap_change_24h)}
              </span>
            )}
          </p>
        </div>
        <div className="other-info-item">
          Market Capitalization Rank{" "}
          <p className="other-info-item-value">
            {coin?.market_data?.market_cap_rank + ""}
          </p>
        </div>
      </div>
    </div>
  );
}
