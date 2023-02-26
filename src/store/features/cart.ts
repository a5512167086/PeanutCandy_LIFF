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
    updateCartItem: (state, action) => {
      console.log(action.payload);
      const { updateProductIndex, newProductCount } = action.payload;
      state.data[updateProductIndex].count = newProductCount;
    },
    removeCartItem: (state, action) => {
      const removeProductIndex = action.payload;
      state.data.splice(removeProductIndex, 1);
    },
    clearCart: (state) => {
      state.data = [];
    }
  }
});

export const { addToCart, updateCartItem, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
