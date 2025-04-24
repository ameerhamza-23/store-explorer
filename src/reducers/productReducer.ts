// src/reducers/productReducer.ts
import { Product } from "../types/Product";
import { ProductAction } from "../types/Product";

const initialState: { products: Product[] } = {
  products: []
};

const productReducer = (state = initialState, action: ProductAction) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
