import { InputHTMLAttributes, MouseEventHandler} from "react";
import styles from "./CheckBtn.module.scss";

interface RadioBtnProps {
   text?: string
   textStyle?: string
   className?: string
   handleClick: MouseEventHandler<HTMLLabelElement> | undefined
}

type RadioBtnType = RadioBtnProps & InputHTMLAttributes<HTMLInputElement>

const CheckBtn = ({text, textStyle, className, handleClick, defaultChecked, ...attributes}: RadioBtnType) => {
   return (
      <div className={[styles.wrap, className].join(" ")}>
         <input
            className={styles.check}
            type="checkbox"
            {...attributes}
         />
         <label
            className={textStyle}
            htmlFor={attributes.id}
            onClick={handleClick}
         >
            {text}
         </label>
      </div>
   );
};

export default CheckBtn;