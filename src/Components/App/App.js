import CoinPage from "../CoinPage/CoinPage";
import Coins from "../CoinsContainer/Coins";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Fetch data from
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr (for all coins do customization in URL according to query)
// https://www.coingecko.com/en/api/documentation

// Fetch the data and make graph using it.
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily

/**
 * Use
 * id, name, symbol, image, current_price
 * market_cap, market_cap_rank,
 * high_24h, low_24h (Use as range)
 * total_volume,
 * price_change_24h, price_change_percentage_24h,
 * market_cap_change_24h, market_cap_change_percentage_24h,
 *
 */

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Navigate to={"/allcoins"} />} />
          <Route path={"/allcoins"} element={<Coins />} />
          <Route path={"/coin/:coinId"} element={<CoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
