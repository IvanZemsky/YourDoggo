import { useEffect } from "react";

export const useEventListener = (event: keyof DocumentEventMap, handler: (e: Event) => void) => {
   useEffect(() => {
      document.addEventListener(event, handler);

      return () => {
         document.removeEventListener(event, handler);
      };
   }, []);
}