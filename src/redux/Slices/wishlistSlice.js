import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        // add to wishlist - view component,
        addToWishlist: (state, action) => {
            state.push(action.payload);
        },
        // remove wishlist - wishlist component
        removeFromWishlist: (state, action) => {
            return state.items.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;