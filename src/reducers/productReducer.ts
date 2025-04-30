import { Product } from "types/Product";
import { Action } from "redux";

interface SetProductsAction extends Action<'SET_PRODUCTS'> {
  payload: Product[];
}

interface setCategoriesAction extends Action<'SET_CATEGORIES'> {
  payload: string[]
}

const initialState: { products: Product[], lastFetched: number | null, categories: string[] } = {
  products: [],
  lastFetched:null,
  categories: []
};

const productReducer = (
  state = initialState,
  action: SetProductsAction | setCategoriesAction | Action<string>
) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: (action as SetProductsAction).payload,
        lastFetched: Date.now()
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: (action as setCategoriesAction ).payload
      }
    default:
      return state;
  }
};

export default productReducer;
