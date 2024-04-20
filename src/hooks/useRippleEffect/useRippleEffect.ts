import {RefObject, useEffect } from "react"
import styles from './RippleEffect.module.scss'

const applyContainerProperties = (elementRef: HTMLElement) => {
   elementRef.classList.add(styles.effectContainer)
}

const setStyles = (event: MouseEvent, elementContainer: HTMLElement):void => {
   const {offsetX, offsetY} = event;
   const {style} = elementContainer;

   const sideOffset = 50; // half of effect-height or effect-width

   style.setProperty('--effect-top', `${offsetY - sideOffset}px`)
   style.setProperty('--effect-left', `${offsetX - sideOffset}px`)
}

// Native type
const onContainerClick = (event: MouseEvent): void => {
   const target = event.target as HTMLElement;
   target.classList.remove(styles.active)
   setStyles(event, target);
   target.classList.add(styles.active)
}

export const useRippleEffect = (containerRef: RefObject<HTMLElement>) => {
   useEffect(() => {
      if (containerRef.current === null) return;

      const elementRef = containerRef.current;
      applyContainerProperties(elementRef);
      elementRef.addEventListener("mouseup", onContainerClick)

      return () => {
         elementRef.removeEventListener("mouseup", onContainerClick)
      }

   }, [containerRef])
}