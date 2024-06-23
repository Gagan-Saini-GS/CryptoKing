import { useEffect, useState } from "react";
import CoinPage from "../Coins/CoinPage";
import Coins from "../Coins/Coins";
import Navbar from "../Navbar/Navbar";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Fetch data from
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr (for all coins do customization in URL according to query)
// https://www.coingecko.com/en/api/documentation

// Fetch the data and make graph using it.
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily

function App() {
  const [coins, setCoins] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [topCoins, setTopCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => res.json())
      .then((response) => {
        response = response.sort((a, b) => b?.current_price - a?.current_price);
        setCoins(response);
        setTopCoins(response.slice(0, 4));
        setAllCoins(response.slice(4));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar coins={coins} />
        <Routes>
          <Route path={"/"} element={<Navigate to={"/allcoins"} />} />
          <Route
            path={"/allcoins"}
            element={
              <Coins
                isLoading={isLoading}
                allCoins={allCoins}
                topCoins={topCoins}
              />
            }
          />
          <Route path={"/coin/:coinId"} element={<CoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
