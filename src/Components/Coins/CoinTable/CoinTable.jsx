import React from "react";
import CoinTableHead from "./CoinTableHead";
import CoinTableBody from "./CoinTableBody";

const CoinTable = ({ allCoins }) => {
  return (
    <div className="overflow-x-scroll">
      <CoinTableHead />
      <CoinTableBody allCoins={allCoins} />
    </div>
  );
};

export default CoinTable;
