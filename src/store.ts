import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { PersistConfig } from "redux-persist";
import {RootState} from 'reducers/index'
import rootReducer from "reducers/index";

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["cart", "product"],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
