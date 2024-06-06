import Button from "@/components/UI/Button/Button";
import { MouseEventHandler } from "react";
import { Fragment } from "react/jsx-runtime";

interface PageBtnsProps {
   currentPage: number;
   pageAmount: number;
   activeStyle?: string;
   handleClick: (
      page: number
   ) => MouseEventHandler<HTMLButtonElement> | undefined;
}

const PageBtns = ({ currentPage, pageAmount, activeStyle, handleClick }: PageBtnsProps) => {
   const pages: number[] = [];
   for (let i = 1; i < pageAmount + 1; i++) {
      pages.push(i);
   }

   return (
      <Fragment>
         {pages.map((page) => (
            <Button
               key={page}
               onClick={handleClick(page)}
               className={currentPage === page ? activeStyle : undefined}
            >
               {page}
            </Button>
         ))}
      </Fragment>
   );
};

export default PageBtns;
