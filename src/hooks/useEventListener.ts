import { useEffect } from "react";

/**
 * @description
 * Создает прослушиватель события для document, при размонитровании компонента удаляет его
 * @param {keyof DocumentEventMap} event - событие
 * @param {Event} handler - обработчик
 */

export const useEventListener = (event: keyof DocumentEventMap, handler: (e: Event) => void) => {
   useEffect(() => {
      document.addEventListener(event, handler);

      return () => {
         document.removeEventListener(event, handler);
      };
   }, []);
}