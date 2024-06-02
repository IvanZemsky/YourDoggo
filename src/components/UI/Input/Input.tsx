import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import styles from "./Input.module.scss";

interface InputProps {
   className?: string | null;
}

type InputType = InputProps & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className = "", ...attributes }: InputType) => {
   const [value, setValue] = useState("");

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
   };

   const stylesl = ([styles.input, className] as const).join(" ")

   return (
      <input
         type="text"
         value={value}
         onChange={handleInputChange}
         className={stylesl}
         {...attributes}
      />
   );
};

export default Input;
