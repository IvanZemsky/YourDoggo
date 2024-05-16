import { useEffect } from "react"

export const useScrollToTop = (deps: any[], behavior: ScrollBehavior = 'instant') => {
   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: behavior
      });
   }, deps);
};