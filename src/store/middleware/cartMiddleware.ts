import { Action,  Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const cartMiddleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
   const result = next(action);
   if (action.type.startsWith('cart/') ) {
     const cartProducts = store.getState().cart.products
     localStorage.setItem('cart', JSON.stringify(cartProducts))
   }

   return result;
};