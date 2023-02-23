import { CartProduct } from '@/types/common';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Array<CartProduct> = [
  { id: 1, name: '', price: 123, count: 1, description: '', productImgSrc: '' }
];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.push({
        id: 0,
        name: '',
        price: 0,
        count: 0,
        description: '',
        productImgSrc: ''
      });
    },
    clearCart: () => []
  }
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
