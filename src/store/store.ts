import { configureStore, combineSlices } from "@reduxjs/toolkit";
import articleSlice from "./slices/articleSlice";
import modalSlice from "./slices/modalSlice";

const rootSlice = combineSlices(articleSlice, modalSlice);

export const store = configureStore({
   reducer: rootSlice
})

export type RootState = ReturnType<typeof rootSlice>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
