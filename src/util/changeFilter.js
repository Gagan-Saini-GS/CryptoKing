export const changeFilter = (coins, filterCriteria) => {
  if (filterCriteria === "highest") {
    const arr = [...coins].sort((a, b) => b?.current_price - a?.current_price);
    return arr;
  } else if (filterCriteria === "lowest") {
    const arr = [...coins].sort((a, b) => a?.current_price - b?.current_price);
    return arr;
  } else if (filterCriteria === "marketcap") {
    const arr = [...coins].sort((a, b) => b?.market_cap - a?.market_cap);
    return arr;
  } else if (filterCriteria === "gainers") {
    const arr = [...coins].sort(
      (a, b) => b?.price_change_percentage_24h - a?.price_change_percentage_24h
    );
    return arr;
  } else if (filterCriteria === "losers") {
    const arr = [...coins].sort(
      (a, b) => a?.price_change_percentage_24h - b?.price_change_percentage_24h
    );
    return arr;
  }

  return coins;
};
