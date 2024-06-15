import Button from "@/components/UI/Button/Button";
import { MouseEventHandler } from "react";
import { Fragment } from "react/jsx-runtime";
import styles from './PageBtns.module.scss'

interface PageBtnsProps {
   currentPage: number;
   pageAmount: number;
   handleClick: (
      page: number
   ) => MouseEventHandler<HTMLButtonElement> | undefined;
}

const PageBtns = ({ currentPage, pageAmount, handleClick }: PageBtnsProps) => {
   const pages = Array.from({length: pageAmount}, ((_, item) => item + 1))
   
   const setBtnStyles = (page: number) => 
      [styles.button, currentPage === page ? styles.active : undefined]
      .join(" ")

   return (
      <Fragment>
         {pages.map((page) => (
            <Button
               key={page}
               onClick={handleClick(page)}
               className={setBtnStyles(page)}
            >
               {page}
            </Button>
         ))}
      </Fragment>
   );
};

export default PageBtns;
