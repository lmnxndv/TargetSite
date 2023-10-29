import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteItem {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  quant: number;
  favorite: boolean;
}

interface FavoriteState {
  favItems: FavoriteItem[];
}
const initialState: FavoriteState = {
  favItems: [],
};

export const FavoriteSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<FavoriteItem>) => {
      const findItem = state.favItems.find(
        (item) => item.id === action.payload.id
      );

      if (!findItem) {
        state.favItems.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const findIndex = state.favItems.findIndex(
        (item) => item.id === action.payload
      );
      state.favItems[findIndex].favorite = false;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
