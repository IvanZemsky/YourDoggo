import { PropsWithChildren, useEffect, useState } from "react";
import Button from "../Button/Button";
import { Fade } from "../Transitions/Fade";
import styles from './Menu.module.scss'
import { selectStyles } from "@/helpers/selectStyles";

interface MenuProps {
   isOpen: boolean
   burgerColor?: 'primary' | 'secondary'
   variant?: 'outlined' | 'filled'
}

const Menu = ({isOpen, burgerColor = 'primary', variant = 'filled', children}: PropsWithChildren<MenuProps>) => {

   const [isMenuOpened, setIsMenuOpened] = useState(!isOpen)

   const menuItemsStyles = selectStyles(isOpen, styles.menuItems, styles.menuItemsOpened)
   const burgerStyles = selectStyles(isOpen, styles.burger, styles.burgerOpened)

   useEffect(() => {
      setIsMenuOpened(!isOpen);
    }, [isOpen]);

   const handleOpen = () => {
      setIsMenuOpened(prev => !prev)
   }

   return (
      <div className={styles.content}>
         <Fade in={isMenuOpened}>
            <div className={menuItemsStyles}>
               {children}
            </div>
         </Fade>
         <Button variant={variant} color={burgerColor} className={burgerStyles} onClick={handleOpen}>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
         </Button>
      </div>
   );
};

export default Menu;
