import { filterAndSortProducts } from "../utils/filterAndSortProducts";
import { Product } from "../types/Product";
import { describe, expect, it } from "vitest";
import { generateMock } from '@anatine/zod-mock';
import { ProductSchema } from "../types/ProductSchema";

describe("filterAndSortProducts", () => {

  const mockProducts: Product[] = Array.from({ length: 3 }, () => generateMock(ProductSchema));
 
  it("should filter products by search term", () => {
    const searchTerm = mockProducts[0].title;
    const filtered = filterAndSortProducts(mockProducts, searchTerm, "", "");
    expect(filtered.length).toBe(1);
    expect(filtered[0].title).toBe(mockProducts[0].title);
  });

  it("should filter products by category", () => {
    const selectedCategory = mockProducts[0].category;
    const filtered = filterAndSortProducts(mockProducts, "", selectedCategory, "");
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered[0].category).toBe(mockProducts[0].category);
  });

  it("should sort products by price in ascending order", () => {
    const sortOption = "price-asc";
    const sorted = filterAndSortProducts(mockProducts, "", "", sortOption);
    const prices = sorted.map((p) => p.price);
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);
  });

  it("should sort products by price in descending order", () => {
    const sortOption = "price-desc";
    const sorted = filterAndSortProducts(mockProducts, "", "", sortOption);
    const prices = sorted.map((p) => p.price);
    const sortedPrices = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sortedPrices);
  });

  it("should sort products by rating in descending order", () => {
    const sortOption = "rating-desc";
    const sorted = filterAndSortProducts(mockProducts, "", "", sortOption);
    const ratings = sorted.map((p) => p.rating.rate);
    const sortedRatings = [...ratings].sort((a, b) => b - a);
    expect(ratings).toEqual(sortedRatings);
  });

  it("should return all products when no filters or sort options are provided", () => {
    const filtered = filterAndSortProducts(mockProducts, "", "", "");
    expect(filtered.length).toBe(mockProducts.length);
  });
});
