import { Product } from "../types/Product";

export function filterAndSortProducts(
  products: Product[],
  searchTerm: string,
  selectedCategory: string,
  sortOption: string
): Product[] {
  let updatedProducts = [...products];

  if (searchTerm) {
    updatedProducts = updatedProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (selectedCategory) {
    updatedProducts = updatedProducts.filter(
      (product) =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  if (sortOption === "price-asc") {
    updatedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    updatedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating-desc") {
    updatedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return updatedProducts;
}
