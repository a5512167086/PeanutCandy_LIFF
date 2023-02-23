import { CartProduct } from '@/types/common';
import { createSlice, current } from '@reduxjs/toolkit';

const initialState: { data: Array<CartProduct> } = { data: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addToCartProduct = action.payload;
      const existedProductIndex = current(state).data.findIndex((product) => product.id === addToCartProduct.id);
      if (existedProductIndex > -1) {
        state.data[existedProductIndex].count += addToCartProduct.count;
        return;
      }

      state.data.push(addToCartProduct);
    },
    clearCart: (state) => {
      state.data = [];
    }
  }
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
