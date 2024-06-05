import { scrollToTop } from "@/helpers/scrollToTop";
import { useEffect } from "react"

export const useScrollToTop = (deps: any[], behavior: ScrollBehavior = 'instant'): void => {
   useEffect(() => {
      scrollToTop(behavior)
   }, deps);
};