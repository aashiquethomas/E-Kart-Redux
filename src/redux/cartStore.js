import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slices/productSlice';
import WishlistReducer from './Slices/wishlistSlice';

const cartStore = configureStore({
  reducer: {
    productReducer:productSlice,
    WishlistReducer:WishlistSlice,
    cartReducer:{}
  },
});

export default cartStore;