import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Wrapper.module.scss";

interface WrapperProps {
   additionalStyles?: string
}

type WrapperType = PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLDivElement>;

const Wrapper = ({ children, additionalStyles, ...attributes }: WrapperType) => {
   return (
      <div
         className={[styles.wrapper, additionalStyles].join(" ")}
         {...attributes}
      >
         {children}
      </div>
   );
};

export default Wrapper;
