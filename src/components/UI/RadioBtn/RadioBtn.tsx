import { InputHTMLAttributes} from "react";
import styles from "./RadioBtn.module.scss";

interface RadioBtnProps {
   text?: string
   textStyle?: string
   className?: string
}

type RadioBtnType = RadioBtnProps & InputHTMLAttributes<HTMLInputElement>

export const RadioBtn = ({text, textStyle, className, ...attributes}: RadioBtnType) => {
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