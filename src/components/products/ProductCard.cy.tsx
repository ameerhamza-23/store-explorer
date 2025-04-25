import ProductCard from "./ProductCard"
import { Product } from "../../types/Product"

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  description: "This is a test product.",
  category: "electronics",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 4.5,
    count: 100,
  },
}

describe("ProductCard", () => {
  beforeEach(() => {
    cy.mount(<ProductCard product={mockProduct} />)
  })

  it("renders the product title", () => {
    cy.contains(mockProduct.title).should("be.visible")
  })

  it("renders the product price", () => {
    cy.contains(`$${mockProduct.price}`).should("be.visible")
  })

  it("renders the product image", () => {
    cy.get("img")
      .should("have.attr", "src", mockProduct.image)
  })

  it("renders the product card with correct structure", () => {
    cy.get("[data-testid='product-card']").should("exist").and("be.visible")
  })
})
