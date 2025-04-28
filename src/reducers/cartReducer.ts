// src/reducers/cartReducer.ts
import { Product } from "../types/Product";
import { Action } from "redux";

interface AddToCartAction extends Action<'ADD_TO_CART'> {
  payload: Product;
}

interface RemoveFromCartAction extends Action<'REMOVE_FROM_CART'> {
  payload: number;
}

type CartActions = AddToCartAction | RemoveFromCartAction | Action<string>;

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: []
};

const cartReducer = (state = initialState, action: CartActions): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, (action as AddToCartAction).payload]
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== (action as RemoveFromCartAction).payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
