import { Product } from "../types/Product";
import { Action } from "redux";

interface AddToCartAction extends Action<'ADD_TO_CART'> {
  payload: Product;
}

interface RemoveFromCartAction extends Action<'REMOVE_FROM_CART'> {
  payload: number;
}

interface IncreaseQuantityAction extends Action<'INCREASE_QUANTIY'> {
  payload: number;
}

interface DecreaseQuantityAction extends Action<'DECREASE_QUANTITY'> {
  payload: number;
}

type CartActions = AddToCartAction | RemoveFromCartAction | IncreaseQuantityAction | DecreaseQuantityAction | Action<string>;

interface CartState {
  cart: { product: Product; quantity: number }[];
}

const initialState: { cart: { product: Product; quantity: number }[] } = {
  cart: []
};

const cartReducer = (state = initialState, action: CartActions): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const product = (action as AddToCartAction).payload;
      const existingProductIndex = state.cart.findIndex(item => item.product.id === product.id);

      if (existingProductIndex >= 0) {
        const updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { product, quantity: 1 }] };
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== (action as RemoveFromCartAction).payload)
      };

      case 'INCREASE_QUANTITY': {
        const productId = (action as IncreaseQuantityAction).payload;
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
    
      case 'DECREASE_QUANTITY': {
        const productId = (action as DecreaseQuantityAction).payload;
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
