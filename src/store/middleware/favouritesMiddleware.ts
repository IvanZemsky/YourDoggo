import { Action,  Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { toggleFavourites } from "../slices/shop/favouritesSlice";

export const favouritesMiddleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
   const result = next(action);
   if (toggleFavourites.match(action)) {
      const currentState = store.getState();
      const { favourites } = currentState.favourites;
      localStorage.setItem("favourites", JSON.stringify(favourites))
      
   } 

   return result
};