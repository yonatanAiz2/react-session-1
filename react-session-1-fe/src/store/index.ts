import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducer.root";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);

export default store;
