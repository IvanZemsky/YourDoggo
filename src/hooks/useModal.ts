import { useEffect } from "react"
import { useAppSelector } from "./redux"
import { useEventListener } from "./useEventListener"

/**
 * @description
 * Открывает/закрывает модальное окно в портале, используя modalSlice для управления состоянием
 * @param {string} modalContent - уникальная строка, тип контента модального окна
 * @returns {boolean} isOpened - состояние модального окна
 */

export const useModal = (modalContent: string): boolean => {
   const opened = useAppSelector((state) => state.modalSlice.opened)
   const isOpened = opened === modalContent

   const currentYScroll = window.scrollY

   const preventScroll = () => {
      scrollTo({top: currentYScroll})
   }

   useEventListener(window, 'scroll', preventScroll, isOpened, [isOpened, modalContent])

   return isOpened;
}