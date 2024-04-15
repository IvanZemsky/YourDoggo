import { configureStore, combineSlices } from "@reduxjs/toolkit";
import articleSlice from "./slices/articleSlice";

const rootSlice = combineSlices(articleSlice);

export const store = configureStore({
   reducer: rootSlice
})

export type RootState = ReturnType<typeof rootSlice>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
