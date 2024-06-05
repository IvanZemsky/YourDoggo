import { RefObject, useEffect } from "react";
import styles from "./RippleEffect.module.scss";

const applyContainerProperties = (elementRef: HTMLElement) => {
   elementRef.classList.add(styles.effectContainer);
};

const setStyles = (event: MouseEvent, elementContainer: HTMLElement): void => {
   const { offsetX, offsetY } = event;
   const { style } = elementContainer;

   const sideOffset = 50; // Половина от высоты / ширины эффекта

   style.setProperty("--effect-top", `${offsetY - sideOffset}px`);
   style.setProperty("--effect-left", `${offsetX - sideOffset}px`);
};

const onContainerClick = (elementRef: HTMLElement) => (event: MouseEvent): void => {
   elementRef.classList.remove(styles.active);
   setStyles(event, elementRef);
   elementRef.classList.add(styles.active);
};

/**
 * Добавляет эффект волны при клике для элемента.
 * Использование:
 * 1) Объявите ref. 2) Передайте его к элементу, который должен иметь эффект. 3) Вызовите этот хук.
 * @param {RefObject<HTMLElement>} containerRef - ref для контейнера, к которому будет применён эффект
 * @return {void}
 */
export const useRippleEffect = (containerRef: RefObject<HTMLElement>): void => {
   useEffect(() => {
      if (containerRef.current === null) return;

      const elementRef = containerRef.current;
      const handleClick = onContainerClick(elementRef);

      applyContainerProperties(elementRef);
      elementRef.addEventListener("mouseup", handleClick);

      return () => {
         elementRef.removeEventListener("mouseup", handleClick);
      };
   }, [containerRef]);
};
