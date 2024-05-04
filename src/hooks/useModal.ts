import { openModal } from "@/store/slices/modalSlice"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./redux"

export const useModal = (modalContent: string): boolean => {
   const dispatch = useAppDispatch()

   const opened = useAppSelector((state) => state.modalSlice.opened)
   const isOpened = opened === modalContent

   useEffect(() => {
      if (isOpened) {
         dispatch(openModal(modalContent))
      }
      if (opened) {
         document.body.style.overflowY = 'hidden'
      }
         
      return () => {
         document.body.style.overflowY = 'scroll'
      }
      
   }, [isOpened])

   return isOpened;
}