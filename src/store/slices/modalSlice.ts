import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface ModalSlice {
   opened: string | null
}

const initialState: ModalSlice = {
   opened: null
}

const modalSlice = createSlice({
   name: 'modalSlice',
   initialState,
   reducers: {
      openModal(state, action) {
         state.opened = action.payload
      },

      closeModal(state) {
         state.opened = null
      }
   }
})

export default modalSlice
export const {openModal, closeModal} = modalSlice.actions