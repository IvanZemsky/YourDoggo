import { openModal } from "@/store/slices/modalSlice"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./redux"

export const useModal = (modalContent: string): boolean => {
   const dispatch = useAppDispatch()

   const opened = useAppSelector((state) => state.modalSlice.opened)
   const isOpened = opened === modalContent

   const preventScroll = () => {
      scrollTo({top: 0})
   }

   useEffect(() => {
      if (isOpened) {
         dispatch(openModal(modalContent))
         window.addEventListener("scroll", preventScroll)
      }

      return () => window.removeEventListener("scroll", preventScroll)
         
   }, [dispatch, isOpened, modalContent])

   return isOpened;
}