import {Button} from "@/shared/ui/Button/Button";
import { MouseEventHandler } from "react";
import styles from './PageBtns.module.scss'

type Props = {
   currentPage: number;
   pageAmount: number;
   handleClick: (
      page: number
   ) => MouseEventHandler<HTMLButtonElement> | undefined;
}

export const PageBtns = ({ currentPage, pageAmount, handleClick }: Props) => {
   const pages = Array.from({length: pageAmount}, ((_, item) => item + 1))
   
   const setBtnStyles = (page: number) => 
      [styles.button, currentPage === page ? styles.active : undefined]
      .join(" ")

   return (
      <>
         {pages.map((page) => (
            <Button
               key={page}
               onClick={handleClick(page)}
               className={setBtnStyles(page)}
            >
               {page}
            </Button>
         ))}
      </>
   );
};