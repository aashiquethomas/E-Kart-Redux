import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slices/productSlice';
import WishlistReducer from './Slices/wishlistSlice';
import cartSlice from './Slices/cartSlice';


const cartStore = configureStore({
  reducer: {
    productReducer:productSlice,
    WishlistReducer:wishlistSlice,
    cartReducer:cartSlice
  },
});

export default cartStore;