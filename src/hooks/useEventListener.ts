import { useEffect } from "react";

/**
 * @description
 * Создает прослушиватель события, при размонитровании компонента удаляет его
 * @param {HTMLElement | Document | Window} target - цель
 * @param {keyof HTMLElementEventMap} event - событие
 * @param {Event} handler - обработчик
 * @param {boolean} condition - условие для установки обработчика
 * @param {any[]} deps - зависимости
 */

export const useEventListener = (
   target: HTMLElement | Document | Window,
   event: keyof HTMLElementEventMap,
   handler: (e: Event) => void,
   condition: boolean = true,
   deps: any[] = []
): void => {
   useEffect(() => {
      if (condition) {
         target.addEventListener(event, handler);
      }

      return () => {
         target.removeEventListener(event, handler);
      };
   }, deps);
};
