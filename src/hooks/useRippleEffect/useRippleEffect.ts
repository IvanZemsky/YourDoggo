import { RefObject, useEffect } from "react";
import styles from "./RippleEffect.module.scss";

const applyContainerProperties = (elementRef: HTMLElement) => {
   elementRef.classList.add(styles.effectContainer);
};

const setStyles = (event: MouseEvent, elementContainer: HTMLElement): void => {
   const { offsetX, offsetY } = event;
   const { style } = elementContainer;

   const sideOffset = 50; // half of effect-height or effect-width

   style.setProperty("--effect-top", `${offsetY - sideOffset}px`);
   style.setProperty("--effect-left", `${offsetX - sideOffset}px`);
};

const onContainerClick = (elementRef: HTMLElement) => (event: MouseEvent): void => {
   elementRef.classList.remove(styles.active);
   setStyles(event, elementRef);
   elementRef.classList.add(styles.active);
};

// usage:
// declase ref
// pass ref to container for ripple effect
// call useRippleEffect hook

export const useRippleEffect = (containerRef: RefObject<HTMLElement>) => {
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
