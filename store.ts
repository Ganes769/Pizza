import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./User";
import cartReducer from "./CartSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: persistedReducer,
});
export const persister = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
