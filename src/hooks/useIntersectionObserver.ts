import { RefObject, useEffect } from "react";

export const useIntersectionObserver = (
   ref: RefObject<HTMLElement>,
   callback: () => void
) => {
   const options: IntersectionObserverInit = {
      threshold: 0.5,
   };

   const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
               console.log("go!!!");
               callback();
            }
         });
      },
      options
   );

   useEffect(() => {
      if (ref.current) {
         observer.observe(ref.current);
      }

      return () => {
         observer.disconnect();
      };
   }, [ref, callback]);
};
