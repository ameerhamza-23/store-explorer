import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export default rootReducer;

// 👇 Make sure this is exported and imported into store.ts
export type RootState = ReturnType<typeof rootReducer>;
