import { configureStore, combineSlices } from "@reduxjs/toolkit";
import articleSlice from "./slices/articleSlice";
import modalSlice from "./slices/modalSlice";
import authSlice from "./slices/authSlice";
import { productAPI } from "@/services/ProductService";
import productFilterSlice from "./slices/shop/productFilterSlice";
import cartSlice from "./slices/shop/cartSlice";

const rootSlice = combineSlices(authSlice, articleSlice, modalSlice, cartSlice, productFilterSlice, productAPI);

export const store = configureStore({
   reducer: rootSlice,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productAPI.middleware)
})

export type RootState = ReturnType<typeof rootSlice>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = typeof store.dispatch
