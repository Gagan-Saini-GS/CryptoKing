import React, { useEffect, useState } from "react";
import "./CoinPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatNumber } from "../../util/priceFormatter";

export default function CoinPage() {
  const params = useParams();
  const [coin, setCoin] = useState();
  const [posLeft, setPosLeft] = useState("0px");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + params?.coinId)
      .then((response) => {
        setCoin(response.data);

        // Calculating the position of tool tip according to low price, current price, high price
        const low = response?.data?.market_data?.low_24h?.usd;
        const high = response?.data?.market_data?.high_24h?.usd;
        const curr = response?.data?.market_data?.current_price?.usd;
        calculateLeftPosition(low, curr, high);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [params?.coinId]);

  const calculateLeftPosition = (low, curr, high) => {
    let percentage = (curr - low) / (high - low);
    // For desktop 360px
    // const newPos = Math.ceil(percentage * 360) + "px"; // Same but I perfered below one

    percentage = percentage * 100;
    const newPos = (percentage / 100) * 365 + "px";

    setPosLeft(newPos);
  };

  return (
    <div className="coin-page-container bg-Black text-White">
      {isLoading ? (
        <div className="loading-container h-screen flex justify-center items-center">
          <div class="spinner"></div>
        </div>
      ) : (
        <>
          <div className="top-section">
            <img src={coin?.image?.large} alt="" />
            <div className="coin-info-section">
              <div className="coin-info-item">
                <div className="coin-info-item-key">Name</div>
                <div className="coin-info-item-value">{coin?.name}</div>
              </div>
              <div className="coin-info-item">
                <div className="coin-info-item-key">Symbol</div>
                <div className="coin-info-item-value symbol">
                  {coin?.symbol}
                </div>
              </div>
              <div className="coin-info-item">
                <div className="coin-info-item-key">Price</div>
                <div className="coin-info-item-value">
                  ${coin?.market_data?.current_price?.usd}
                </div>
              </div>
              <div className="coin-info-item">
                <div className="coin-info-item-key">Total Volume</div>
                <div className="coin-info-item-value">
                  {formatNumber(Number(coin?.market_data?.total_volume?.usd))}
                </div>
              </div>
              <div className="line-text">24 hours price range</div>
              <div className="coin-price-range-section">
                <div className="line">
                  <div className="tooltip">
                    <span className="tooltiptext" style={{ left: posLeft }}>
                      ${coin?.market_data?.current_price?.usd}
                    </span>
                  </div>
                  <input
                    type="range"
                    className="slider"
                    min={"" + 10000000000 * coin?.market_data?.low_24h?.usd}
                    max={"" + 10000000000 * coin?.market_data?.high_24h?.usd}
                    value={
                      "" + 10000000000 * coin?.market_data?.current_price?.usd
                    }
                    readOnly={true}
                  />
                </div>
                {/* <div className="line-text">24 hours price range</div> */}
                <div className="price-range">
                  <div className="low-price">
                    <span>Low</span> ${coin?.market_data?.low_24h?.usd}
                  </div>
                  <div className="high-price">
                    <span>High</span> ${coin?.market_data?.high_24h?.usd}
                  </div>
                </div>
              </div>
              <div className="btn-section">
                <button className="bg-Green font-semibold text-lg uppercase rounded-md px-10 py-2">
                  buy
                </button>
                <button className="bg-Red font-semibold text-lg uppercase rounded-md px-10 py-2">
                  sell
                </button>
              </div>
            </div>
            <div className="other-info-section">
              <div className="text-xl font-semibold">Stats</div>
              <div className="other-info-item">
                Market Capitalization Rank{" "}
                <p className="other-info-item-value">
                  {coin?.market_data?.market_cap_rank + ""}
                </p>
              </div>
              <div className="other-info-item">
                Price change in a day{" "}
                <p className="other-info-item-value">
                  <span
                    className={`${
                      coin?.market_data?.price_change_24h < 0
                        ? "text-Red"
                        : "text-Green"
                    }`}
                  >
                    ${coin?.market_data?.price_change_24h.toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="other-info-item">
                Market Capitalization change in a day{" "}
                <p className="other-info-item-value">
                  <span
                    className={`${
                      coin?.market_data?.market_cap_change_24h < 0
                        ? "text-Red"
                        : "text-Green"
                    }`}
                  >
                    $
                    {coin?.market_data?.market_cap_change_24h < 0 && (
                      <span className="text-Red" style={{ margin: "0" }}>
                        -
                      </span>
                    )}
                    {formatNumber(
                      Math.floor(
                        Math.abs(coin?.market_data?.market_cap_change_24h)
                      )
                    )}
                  </span>
                </p>
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
        </>
      )}
    </div>
  );
}
