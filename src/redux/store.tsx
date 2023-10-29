import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./cartSlice";
import { FavoriteSlice } from "./favoritesSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    favorites: FavoriteSlice.reducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
