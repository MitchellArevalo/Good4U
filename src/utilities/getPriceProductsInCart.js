export const getPriceProductsInCart = (products) => {
  const priceProducts = products.map((product) => product.totalPrice);
  const subTotalProducts = priceProducts.reduce((a, b) => a + b, 0);
  console.log(priceProducts);
  return subTotalProducts;
};
