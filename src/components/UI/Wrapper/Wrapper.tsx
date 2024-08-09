import { HTMLAttributes} from "react";
import styles from "./Wrapper.module.scss";

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
   additionalStyles?: string
}

export const Wrapper = ({ children, additionalStyles, ...attributes }: WrapperProps) => {
   return (
      <div
         className={[styles.wrapper, additionalStyles].join(" ")}
         {...attributes}
      >
         {children}
      </div>
   );
};
