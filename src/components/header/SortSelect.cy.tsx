import { SortSelect } from "./SortSelect"
import { useState } from "react"

describe("SortSelect", () => {
  const TestComponent = () => {
    const [sortOption, setSortOption] = useState("")

    return (
      <SortSelect
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      />
    )
  }

  beforeEach(() => {
    cy.mount(<TestComponent />)
  })

  it("renders all sort options", () => {
    cy.get("[data-testid='sort-select']").children().should("have.length", 4)
    cy.get("option").contains("Price: Low to High")
    cy.get("option").contains("Rating")
  })

  it("updates the selected sort option when user selects a value", () => {
    cy.get("[data-testid='sort-select']").select("rating-desc")
    cy.get("[data-testid='sort-select']").should("have.value", "rating-desc")
  })
})
