// usage
// declare ref of animated element and styles to be applied to it
// call hook
// pass ref, styles and optionally delay

import { RefObject, useEffect } from "react";

export const useIntersectionObserver = (ref: RefObject<HTMLDivElement>, style: string, delay = 0): void => {

   const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
         if (entry.isIntersecting) {
            setTimeout(() => {
               if (ref.current) {
                  ref.current.classList.add(style);
               }
            }, delay);
            observer.unobserve(entry.target);
         }
      });
   });

   useEffect(() => {
      if (ref.current) {
         observer.observe(ref.current);
      }

      return () => {
         observer.disconnect();
      };
   }, [ref.current]);
}