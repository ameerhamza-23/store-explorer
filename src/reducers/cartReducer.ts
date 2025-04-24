import { Product } from "../types/Product";
import { CartAction } from "../types/Cart";

const initialState: {cart: Product[]} = {
    cart: []
};

const cartReducer = (state = initialState, action: CartAction) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload], 
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id), 
            };
        default:
            return state;
    }
}

export default cartReducer;