import { createSlice } from "@reduxjs/toolkit";

interface cartSliceType {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
}
interface addToCartType {
  cart: cartSliceType[];
}
const initstate: addToCartType = {
  cart: [],
};
console.log(initstate);
const cartSlice = createSlice({
  name: "cart",
  initialState: initstate,

  reducers: {
    addtocart(state = initstate, action) {
      const newItem = action.payload;

      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cart.push(newItem);
      }
    },
    deleteItem(state = initstate, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state = initstate, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      // item.quantity++;
    },
  },
});
export const { addtocart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
export const getcart = (state: any) => state.cart.cart;
export const totalCartPrice = (state: any) =>
  state.cart.reduce((sum: number, item: any) => sum + item.unitPrice, 0);
