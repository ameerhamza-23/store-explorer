import { useState } from "react"
import { CategorySelect } from "./CategorySelect"

describe("CategorySelect", () => {
  const TestComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState("")
    const categories = ["electronics", "jewelery", "men's clothing"]

    return (
      <CategorySelect
        options={categories}
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      />
    )
  }

  beforeEach(() => {
    cy.mount(<TestComponent />)
  })

  it("renders all categories including 'All Categories'", () => {
    cy.get("[data-testid='category-select']").children().should("have.length", 4)
    cy.get("option").contains("All Categories")
  })

  it("changes selected category on user selection", () => {
    cy.get("[data-testid='category-select']").select("electronics")
    cy.get("[data-testid='category-select']").should("have.value", "electronics")
  })
})
