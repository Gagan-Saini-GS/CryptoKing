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
