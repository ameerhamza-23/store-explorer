import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import rootReducer from "./reducers";
import { PersistConfig } from "redux-persist";
import { RootState } from "./reducers"; 

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
