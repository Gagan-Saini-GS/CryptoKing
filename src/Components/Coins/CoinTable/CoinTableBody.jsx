import React, { useState } from "react";
import PositiveGraph from "../../../assets/images/positive-chart.png";
import NegativeGraph from "../../../assets/images/negative-chart.png";
import CoinTableBodyCard from "./CoinTableBodyCard";
import { List, Pagination } from "antd";

const CoinTableBody = ({ allCoins }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Default page size

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const currentData = allCoins.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <div className="min-w-[1440px] lg:min-w-[1220px] bg-Darkblack">
        <List
          className="no-padding"
          dataSource={currentData}
          renderItem={(coin, index) => (
            <List.Item>
              <div className="text-White w-full">
                <CoinTableBodyCard
                  id={coin.id}
                  index={(currentPage - 1) * 10 + index + 1}
                  name={coin.name}
                  currencyLogo={coin.image}
                  symbol={coin.symbol}
                  currentPrice={coin.current_price}
                  lowPrice={coin.low_24h}
                  highPrice={coin.high_24h}
                  pecentageChange={coin.price_change_percentage_24h}
                  marketCap={coin.market_cap}
                  graph={
                    coin.price_change_percentage_24h > 0
                      ? PositiveGraph
                      : NegativeGraph
                  }
                  isFavourite={false}
                />
              </div>
            </List.Item>
          )}
        />
      </div>
      <div className="flex justify-center pt-6">
        <Pagination
          className="custom-pagination"
          current={currentPage}
          pageSize={pageSize}
          total={allCoins.length}
          onChange={handlePageChange}
          showSizeChanger
          onShowSizeChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default CoinTableBody;
