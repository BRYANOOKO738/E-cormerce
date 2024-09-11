// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const product = state.products.find((product) => product._id === id);
      if (product) {
        product.quantity += 1;
        state.total += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const product = state.products.find((product) => product._id === id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.total -= product.price;
      }
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
