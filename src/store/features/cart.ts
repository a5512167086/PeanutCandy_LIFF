import { CartProduct } from '@/types/common';
import { createSlice, current } from '@reduxjs/toolkit';

const initialState: Array<CartProduct> = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addToCartProduct = action.payload;
      const existedProductIndex = current(state).findIndex((product) => product.id === addToCartProduct.id);
      if (existedProductIndex > -1) {
        state[existedProductIndex].count += addToCartProduct.count;
        return;
      }

      state.push(addToCartProduct);
    },
    clearCart: () => []
  }
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
