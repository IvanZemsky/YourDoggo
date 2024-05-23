import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./redux"

export const useModal = (modalContent: string): boolean => {
   const opened = useAppSelector((state) => state.modalSlice.opened)
   const isOpened = opened === modalContent

   const preventScroll = () => {
      scrollTo({top: 0})
   }

   useEffect(() => {
      if (isOpened) {
         window.addEventListener("scroll", preventScroll)
      }

      return () => window.removeEventListener("scroll", preventScroll)
         
   }, [isOpened, modalContent])

   return isOpened;
}