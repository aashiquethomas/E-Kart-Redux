import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initalState: [],
    reducers: {
        // add to cart - view and wishlist
        addCart: (state, action) => {
            const existingItem = state.find(item => item.item.id == isAction.payload)
            if (existingItem) {
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.quantity * existingItem.price

            }
            else {
                state.push({ ...action.payload, quantity: 1, totalPrice: payload.price })
            }

        }
    }
})

export const {addCart} = createSlice.actions
export default createSlice.reducer 