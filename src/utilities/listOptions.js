export const sizeProduct = (product) => product.size.map((size) => size);

export const categoriesOptions = (listProducts) =>
  listProducts.map((product) => product.category.nameCategory);

export const sortOptions = ["Menor precio", "Mayor precio"];
