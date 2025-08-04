export const getPrice = (apiPrice) => {
  if (typeof apiPrice !== "number" || isNaN(apiPrice)) {
    return "$0.00";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(apiPrice);
};
