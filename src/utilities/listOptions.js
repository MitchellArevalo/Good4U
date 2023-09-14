export const sizeProduct = (product) => product.size.map((size) => size);

export const categoriesOptions = (listData) => {
  const categoriesData = listData.map(
    (product) => product.category.nameCategory
  );
  const categoriesFilter = categoriesData.filter(
    (category, i) => categoriesData.indexOf(category) === i
  );
  return categoriesFilter;
};

export const sortOptions = ["Menor precio", "Mayor precio"];
