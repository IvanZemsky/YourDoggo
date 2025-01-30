import { ComponentPropsWithoutRef, MouseEventHandler } from "react"
import styles from "./CheckBtn.module.scss"

type Props = ComponentPropsWithoutRef<"input"> & {
   text?: string
   textStyle?: string
   className?: string
   handleClick: MouseEventHandler<HTMLLabelElement> | undefined
}

export const CheckBtn = ({
   text,
   textStyle,
   className,
   handleClick,
   defaultChecked,
   ...attributes
}: Props) => {
   return (
      <div className={[styles.wrap, className].join(" ")}>
         <input className={styles.check} type="checkbox" {...attributes} />
         <label className={textStyle} htmlFor={attributes.id} onClick={handleClick}>
            {text}
         </label>
      </div>
   )
}
