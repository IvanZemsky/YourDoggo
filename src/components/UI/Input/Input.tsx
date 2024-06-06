import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps {
   className?: string | null;
}

type InputType = InputProps & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className = "", ...attributes }: InputType) => {

   const style = ([styles.input, className] as const).join(" ")

   return (
      <input
         type="text"
         className={style}
         {...attributes}
      />
   );
};

export default Input;
