import { createSlice, current } from "@reduxjs/toolkit";

interface FavouritesSlice {
   favourites: string[] // id of products
}

const initialState = (): FavouritesSlice => {
   const favourites = JSON.parse(localStorage.getItem("favourites") || "[]")
   console.log(favourites)
   return {
      favourites
   }
}

const favouritesSlice = createSlice({
   name: 'favourites',
   initialState,
   reducers: {
      toggleFavourites(state, action) {
         const productId = action.payload
         const idIndex = state.favourites.findIndex(id => id === productId)
         if (idIndex === -1) {
            state.favourites.push(action.payload)
         } else {
            state.favourites.splice(idIndex, 1)
         }
      },
   }
})

export default favouritesSlice
export const {toggleFavourites} = favouritesSlice.actions