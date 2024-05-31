import { configureStore, combineSlices } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import authSlice from "./slices/authSlice";
import { YourDoggoAPI } from "@/services/YourDoggoService";
import productFilterSlice from "./slices/shop/productFilterSlice";
import cartSlice from "./slices/shop/cartSlice";
import favouritesSlice from "./slices/shop/favouritesSlice";
import { favouritesMiddleware } from "./middleware/favouritesMiddleware";
import { cartMiddleware } from "./middleware/cartMiddleware";
import galleryFilterSlice from "./slices/gallery/galleryFilterSlice";
import shopSlice from "./slices/shop/shopSlice";
import articleFilterSlice from "./slices/articles/articleFilterSlice";

const rootSlice = combineSlices(
   authSlice,
   modalSlice,
   favouritesSlice,
   cartSlice,
   productFilterSlice,
   galleryFilterSlice,
   articleFilterSlice,
   shopSlice,
   YourDoggoAPI
);

export const store = configureStore({
   reducer: rootSlice,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         YourDoggoAPI.middleware,
         favouritesMiddleware,
         cartMiddleware
      ),
});

export type RootState = ReturnType<typeof rootSlice>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store.dispatch;
