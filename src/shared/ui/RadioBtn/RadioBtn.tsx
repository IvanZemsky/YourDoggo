import { ComponentProps} from "react";
import styles from "./RadioBtn.module.scss";

type Props = ComponentProps<"input"> & {
   text?: string
   textStyle?: string
}

export const RadioBtn = ({text, textStyle, className, ...attributes}: Props) => {
   return (
      <div className={[styles.wrap, className].join(" ")}>
         <input
            className={styles.radio}
            type="radio"
            {...attributes}
         />
         <label
            className={textStyle}
            htmlFor={attributes.id}
         >
            {text}
         </label>
      </div>
   );
};