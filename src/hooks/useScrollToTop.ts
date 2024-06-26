import { scrollToTop } from "@/utils/scrollToTop";
import { useEffect } from "react"

export const useScrollToTop = (deps: any[] = [], behavior: ScrollBehavior = 'smooth'): void => {
   useEffect(() => {
      scrollToTop(behavior)
   }, deps);
};