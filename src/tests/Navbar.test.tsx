import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Navbar from "components/navbar/Navbar";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom/vitest';

const cartReducer = (state = { cart: { cart: [1, 2, 3] } }, action: any) => state;

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

describe("Navbar", () => {
  it("renders Home and Cart links with correct hrefs", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const homeLink = screen.getByText("Home");
    const cartLink = screen.getByText("Cart");

    expect(homeLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();

    expect(homeLink.closest("a")).toHaveAttribute("href", "/");
    expect(cartLink.closest("a")).toHaveAttribute("href", "/cart");
  });


});
