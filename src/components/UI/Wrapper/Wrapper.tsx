import { HTMLAttributes} from "react";
import styles from "./Wrapper.module.scss";

interface WrapperProps {
   additionalStyles?: string
}

type WrapperType = WrapperProps & HTMLAttributes<HTMLDivElement>;

export const Wrapper = ({ children, additionalStyles, ...attributes }: WrapperType) => {
   return (
      <div
         className={[styles.wrapper, additionalStyles].join(" ")}
         {...attributes}
      >
         {children}
      </div>
   );
};
