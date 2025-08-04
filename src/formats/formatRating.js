export const getRating = (apiRating) => {
  if (!apiRating || typeof apiRating.rate !== "number") {
    return {
      star: 0,
      rate: "0.0/5",
    };
  }

  // Pembulatan
  const roundedRate = Math.round(apiRating.rate);
  const star = Math.max(0, Math.min(5, roundedRate));

  return {
    star,
    rate: `${apiRating.rate.toFixed(1)}/5`,
  };
};
