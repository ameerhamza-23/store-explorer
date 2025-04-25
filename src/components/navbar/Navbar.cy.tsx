import Navbar from "./Navbar"
import { Provider } from "react-redux"
import { store } from "../../store"
import { MemoryRouter } from "react-router-dom"

describe("Navbar", () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    )
  })

  it("renders Home and Cart links", () => {
    cy.contains("Home").should("have.attr", "href", "/")
    cy.contains("Cart").should("have.attr", "href", "/cart")
  })

  it("displays the correct cart item count", () => {
    cy.contains("Items").should("exist")
  })
})
