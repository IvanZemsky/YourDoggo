import { configureStore, combineSlices } from "@reduxjs/toolkit";
import articleSlice from "./slices/articleSlice";
import modalSlice from "./slices/modalSlice";
import authSlice from "./slices/authSlice";
import { productAPI } from "@/services/ProductService";
import productFilterSlice from "./slices/shop/productFilterSlice";
import cartSlice from "./slices/shop/cartSlice";
import favouritesSlice from "./slices/shop/favouritesSlice";
import { favouritesMiddleware } from "./middleware/favouritesMiddleware";

const rootSlice = combineSlices(authSlice, articleSlice, modalSlice, favouritesSlice, cartSlice, productFilterSlice, productAPI);

export const store = configureStore({
   reducer: rootSlice,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productAPI.middleware, favouritesMiddleware)
})

export type RootState = ReturnType<typeof rootSlice>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = typeof store.dispatch
