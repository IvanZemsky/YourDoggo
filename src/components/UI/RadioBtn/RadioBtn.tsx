import { InputHTMLAttributes} from "react";
import styles from "./RadioBtn.module.scss";

interface RadioBtnProps extends InputHTMLAttributes<HTMLInputElement> {
   text?: string
   textStyle?: string
}

export const RadioBtn = ({text, textStyle, className, ...attributes}: RadioBtnProps) => {
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