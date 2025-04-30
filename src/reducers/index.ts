import { combineReducers } from "redux";
import cartReducer from "reducers/cartReducer";
import productReducer from "reducers/productReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
