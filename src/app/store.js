import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/product/productListSlice'
export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});