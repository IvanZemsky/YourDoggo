import { ComponentPropsWithRef, Ref, forwardRef } from "react"
import styles from "./Input.module.scss"

type Props = ComponentPropsWithRef<"input"> & {}

export const Input = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
   const { className, ...attributes } = props
   const style = ([styles.input, className] as const).join(" ")

   return <input {...attributes} type="text" className={style} ref={ref} />
})
