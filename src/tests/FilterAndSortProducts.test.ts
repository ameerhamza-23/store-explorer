import { filterAndSortProducts } from "utils/filterAndSortProducts";
import { Product } from "types/Product";
import { describe, expect, it } from "vitest";

describe("filterAndSortProducts", () => {
  const products: Product[] = [
    { id: 1, title: "Product A", category: "Category 1", price: 100, rating: { rate: 4, count: 10 }, description:"", image:"" },
    { id: 2, title: "Product B", category: "Category 2", price: 50, rating: { rate: 3, count: 5 }, description:"", image:"" },
    { id: 3, title: "Product C", category: "Category 1", price: 200, rating: { rate: 5, count: 15 }, description:"", image:"" },
  ];

  it("should filter products by search term", () => {
    const searchTerm = "Product A";
    const filtered = filterAndSortProducts(products, searchTerm, "", "");
    expect(filtered.length).toBe(1);
    expect(filtered[0].title).toBe("Product A");
  });

  it("should filter products by category", () => {
    const selectedCategory = "Category 1";
    const filtered = filterAndSortProducts(products, "", selectedCategory, "");
    expect(filtered.length).toBe(2);
    expect(filtered[0].category).toBe("Category 1");
  });

  it("should sort products by price in ascending order", () => {
    const sortOption = "price-asc";
    const sorted = filterAndSortProducts(products, "", "", sortOption);
    expect(sorted[0].price).toBe(50); 
    expect(sorted[1].price).toBe(100); 
    expect(sorted[2].price).toBe(200); 
  });

  it("should sort products by price in descending order", () => {
    const sortOption = "price-desc";
    const sorted = filterAndSortProducts(products, "", "", sortOption);
    expect(sorted[0].price).toBe(200);
    expect(sorted[1].price).toBe(100);
    expect(sorted[2].price).toBe(50);
  });

  it("should sort products by rating in descending order", () => {
    const sortOption = "rating-desc";
    const sorted = filterAndSortProducts(products, "", "", sortOption);
    expect(sorted[0].rating.rate).toBe(5);
    expect(sorted[1].rating.rate).toBe(4); 
    expect(sorted[2].rating.rate).toBe(3); 
  });

  it("should return all products when no filters or sort options are provided", () => {
    const filtered = filterAndSortProducts(products, "", "", "");
    expect(filtered.length).toBe(3);
  });
});
