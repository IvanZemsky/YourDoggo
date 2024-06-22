import { RefObject, useEffect } from "react";

/**
 * @description
 * Хук для применения стилей к элементу, если он в пределах области видимости
 * @param {RefObject<HTMLElement>} ref - ref для анимируемого элемента 
 * @param {string} style - класс из таблицы стилей для применения 
 * @param {number} delay - [опциоально] - задержка перед применением стилей
 */

export const useSetStylesObserver = (ref: RefObject<HTMLElement>, style: string, delay: number = 0): void => {

   const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
         if (entry.isIntersecting) {
            setTimeout(() => {
               if (ref.current) {
                  console.log('11234')
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