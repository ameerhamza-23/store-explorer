import ProductCard from "components/products/ProductCard"
import { Product } from "types/Product"
import { MemoryRouter } from "react-router-dom"

describe("ProductCard", () => {
  let mockProduct: Product

  beforeEach(() => {
    cy.fixture("product").then((product) => {
      mockProduct = product
      cy.mount(
        <MemoryRouter>
          <ProductCard product={mockProduct} />
        </MemoryRouter>
      )
    })
  })

  it("renders the product title", () => {
    cy.contains(mockProduct.title).should("be.visible")
  })

  it("renders the product price", () => {
    cy.contains(`$${mockProduct.price}`).should("be.visible")
  })

  it("renders the product image", () => {
    cy.get("img").should("have.attr", "src", mockProduct.image)
  })
  it("displays the correct stock count from the product data", () => {
    cy.contains(`In Stock: ${mockProduct.rating.count}`).should("be.visible")
  })
 
})
