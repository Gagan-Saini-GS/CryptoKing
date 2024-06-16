export const formatPrice = (price, currencyType) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyType,
  }).format(Number(price));
};

export const formatNumber = (value) => {
  if (value >= 1.0e12) {
    return (value / 1.0e12).toFixed(2) + "T";
  } else if (value >= 1.0e9) {
    return (value / 1.0e9).toFixed(2) + "B";
  } else if (value >= 1.0e6) {
    return (value / 1.0e6).toFixed(2) + "M";
  } else if (value >= 1.0e3) {
    return (value / 1.0e3).toFixed(2) + "K";
  } else {
    return value.toString();
  }
};
