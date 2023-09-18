import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/product/productListSlice'
import authReducer from '../features/auth/authSlice'
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    user : authReducer
  },
});