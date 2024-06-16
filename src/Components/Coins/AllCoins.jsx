import React, { useEffect, useState } from "react";
import OptionNavbar from "../Navbar/OptionNavbar";
import CoinTable from "./CoinTable/CoinTable";
import { FilterNavOptions } from "../../constant";

const AllCoins = ({ allCoins, changeFilter }) => {
  const [coinArr, setCoinArr] = useState([]);

  useEffect(() => {
    if (allCoins && allCoins.length > 0) {
      setCoinArr(allCoins);
    }
  }, [allCoins]);

  return (
    <div className="lg:block bg-Darkblack mx-4 sm:mx-8 md:mx-16 lg:mx-24 py-2 text-White">
      <div className="w-full flex items-center justify-between">
        <div className="font-bold text-2xl md:text-3xl lg:text-5xl">
          Market Update
        </div>
        <div className="text-LightGray hover:text-Blue hover:underline cursor-pointer font-medium">
          See all coins
        </div>
      </div>
      <div className="py-4">
        <OptionNavbar
          showBottomLine={false}
          options={FilterNavOptions}
          changeFilter={changeFilter}
          coinArr={coinArr}
          setCoinArr={setCoinArr}
        />
      </div>
      <div className="py-4">
        <CoinTable allCoins={coinArr} />
      </div>
    </div>
  );
};

export default AllCoins;
