import { PropsWithChildren, useEffect, useRef, useState } from "react";
import {Button} from "../Button/Button";
import { Fade } from "../Transitions/Fade/Fade";
import styles from "./Menu.module.scss";
import { selectStyles } from "@/utils/selectStyles";
import { useEventListener } from "@/hooks/useEventListener";

type Props = {
   isOpen: boolean;
   burgerColor?: "primary" | "secondary";
   variant?: "outlined" | "filled";
}

export const Menu = ({
   isOpen,
   burgerColor = "primary",
   variant = "filled",
   children,
}: PropsWithChildren<Props>) => {
   const [isMenuOpened, setIsMenuOpened] = useState(!isOpen);
   const burgerRef = useRef<HTMLDivElement>(null);

   useEventListener(document, "mousedown", (event: MouseEvent) => {
      const isNotBurgerClick = burgerRef.current && !burgerRef.current.contains(event.target as Node);
      if (isNotBurgerClick && isOpen) {
         setIsMenuOpened(false);
      }
   });

   const handleOpen = () => {
      setIsMenuOpened((prev) => !prev);
   };

   const menuItemsStyles = selectStyles(
      isOpen,
      styles.menuItems,
      styles.menuItemsOpened
   );
   const burgerStyles = selectStyles(
      isOpen,
      styles.burger,
      styles.burgerOpened
   );

   return (
      <div className={styles.content}>
         <Fade in={isMenuOpened}>
            <div className={menuItemsStyles}>{children}</div>
         </Fade>
         <div ref={burgerRef}>
            <Button
               variant={variant}
               color={burgerColor}
               className={burgerStyles}
               onClick={handleOpen}
            >
               <div className={styles.burgerLine}></div>
               <div className={styles.burgerLine}></div>
               <div className={styles.burgerLine}></div>
            </Button>
         </div>
      </div>
   );
};
