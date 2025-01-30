import { ComponentProps} from "react";
import styles from "./Wrapper.module.scss";

type Props = ComponentProps<"div"> & {
   additionalStyles?: string
}

export const Wrapper = ({ children, additionalStyles, ...attributes }: Props) => {
   return (
      <div
         className={[styles.wrapper, additionalStyles].join(" ")}
         {...attributes}
      >
         {children}
      </div>
   );
};
