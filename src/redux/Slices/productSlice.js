import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: true,
    allProducts: [],
    dummyAllProducts: [],
    error: "",
  },
  reducers: {
    // define only synchronous actions here
    searchProducts: (state, action) => {
      state.allProducts = state.dummyAllProducts.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
        state.dummyAllProducts = action.payload;
        state.error = "";
      })
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.allProducts = [];
        state.dummyAllProducts = [];
        state.error = "";
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
        state.allProducts = [];
        state.error = "API call failed";
      });
  },
});

export const { searchProducts } = productSlice.actions;
export default productSlice.reducer;
 