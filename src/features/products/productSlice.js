import {
  createProduct,
  deleteProduct,
  editProduct,
  fetchProduct,
  orderByIdProducts,
} from "./productAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })

      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...state.products, action.payload];
      })
      .addCase(createProduct.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(editProduct.pending, (state) => {
        state.loading = true;
      })

      .addCase(editProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log(state.products);
        state.products = state.products.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(editProduct.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(orderByIdProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(orderByIdProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(orderByIdProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

const productReducer = productSlice.reducer;
export default productReducer;
