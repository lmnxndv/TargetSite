import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  quant: number;
  favorite: boolean;
}
interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.quant += 1;
        findItem.price += action.payload.price;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    quantIncrease: (state, action: PayloadAction<string>) => {
      const itemIncrease = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemIncrease) {
        itemIncrease.quant += 1;
        itemIncrease.price += itemIncrease.price / (itemIncrease.quant - 1);
      }
    },
    quantDecrease: (state, action: PayloadAction<string>) => {
      const itemDecrease = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemDecrease) {
        if (itemDecrease.quant > 1) {
          itemDecrease.quant -= 1;
          itemDecrease.price -= itemDecrease.price / (itemDecrease.quant + 1);
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
  },
});

export const { addToCart, removeCart, quantDecrease, quantIncrease } =
  CartSlice.actions;
export default CartSlice.reducer;
