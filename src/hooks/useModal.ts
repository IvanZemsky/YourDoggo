import { useEffect } from "react"
import { useAppSelector } from "./redux"

export const useModal = (modalContent: string): boolean => {
   const opened = useAppSelector((state) => state.modalSlice.opened)
   const isOpened = opened === modalContent

   const currentYScroll = window.scrollY

   const preventScroll = () => {
      scrollTo({top: currentYScroll})
   }

   useEffect(() => {
      if (isOpened) {
         window.addEventListener("scroll", preventScroll)
      }

      return () => window.removeEventListener("scroll", preventScroll)
         
   }, [isOpened, modalContent])

   return isOpened;
}