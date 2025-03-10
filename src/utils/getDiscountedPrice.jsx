export const getDiscountedPrice = ({ price, discountedPrice }) => {
  if (!discountedPrice)
    return {
      discountedPrice: price,
      originalPrice: price,
      discountPercentage: 0,
    };

  const discountPercentage = Math.round(
    ((price - discountedPrice) / price) * 100,
  );
  return { discountedPrice, originalPrice: price, discountPercentage };
};
