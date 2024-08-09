import { InputHTMLAttributes, Ref, forwardRef } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export const Input = forwardRef(({ className = "", ...attributes }: InputProps, ref) => {

   const style = ([styles.input, className] as const).join(" ")

   return (
      <input
         type="text"
         className={style}
         {...attributes}
         ref={ref as Ref<HTMLInputElement>}
      />
   );
});
