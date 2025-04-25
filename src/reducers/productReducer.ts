import { Product } from "../types/Product";
import { Action } from "redux";

interface SetProductsAction extends Action<'SET_PRODUCTS'> {
  payload: Product[];
}

const initialState: { products: Product[], lastFetched: number | null } = {
  products: [],
  lastFetched:null
};

const productReducer = (
  state = initialState,
  action: SetProductsAction | Action<string>
) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: (action as SetProductsAction).payload,
        lastFetched: Date.now()
      };
    default:
      return state;
  }
};

export default productReducer;
