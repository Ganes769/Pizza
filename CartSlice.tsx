import { createSlice } from "@reduxjs/toolkit";

export interface cartSliceType {
  id: number;
  totalPrice: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  quantity?: number;
}
export interface addToCartType {
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
      if (item?.quantity !== undefined) {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
      } else {
        item?.quantity;
      }
    },
    decreaseQuantity(state = initstate, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item?.quantity !== undefined) {
        item.totalPrice = item.totalPrice - item.unitPrice;
        item.quantity--;
      }
      if (item?.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    cleaarcart(state) {
      state.cart = [];
    },
  },
});
export const {
  addtocart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  cleaarcart,
} = cartSlice.actions;
export default cartSlice.reducer;
export const getcart = (state: any) => state.cart.cart;
export const totalCartPrice = (state: any) =>
  state.cart.cart.reduce((sum: number, item: any) => sum + item.totalPrice, 0);
