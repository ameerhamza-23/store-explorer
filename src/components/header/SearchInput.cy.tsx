import { useState } from "react"
import { SearchInput } from "./SearchInput"

describe("SearchInput", () => {
  function Wrapper() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
      <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    )
  }

  beforeEach(() => {
    cy.mount(<Wrapper />)
  })

  it("renders the input with placeholder", () => {
    cy.get('[data-testid="search-input"]')
      .should("be.visible")
      .and("have.attr", "placeholder", "Search products...")
  })

  it("updates the input value when typing", () => {
    cy.get('[data-testid="search-input"]')
      .type("Laptop")
      .should("have.value", "Laptop")
  })
})
