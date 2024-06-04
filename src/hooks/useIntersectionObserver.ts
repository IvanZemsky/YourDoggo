import { RefObject, useEffect } from "react";

export const useIntersectionObserver = (
   callback: () => void,
   ref: RefObject<HTMLElement>
) => {
   const options: IntersectionObserverInit = {
      threshold: 0.1,
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
         console.log(ref.current)
         observer.observe(ref.current);
      }

      return () => {
         observer.disconnect();
      };
   }, [ref]);
};
