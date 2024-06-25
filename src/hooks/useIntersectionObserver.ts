import { RefObject, useEffect } from "react";

/**
 * @description
 * Хук для вызова колбека, если элемент в пределах области видимости
 * @param {RefObject<HTMLElement>} ref - ref для отслеживаемого элемента
 * @param callback - функция для выполнения
 */

const defaultOptions: IntersectionObserverInit = {
   threshold: 0.7,
};

export const useIntersectionObserver = (
   ref: RefObject<HTMLElement>,
   callback: (...args: any) => void,
   options: IntersectionObserverInit = defaultOptions
) => {
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
