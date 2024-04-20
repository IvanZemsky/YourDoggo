import { PropsWithChildren, ReactNode, useEffect, useRef } from 'react'
import styles from './Button.module.scss'
import { useRippleEffect } from "../../../hooks/useRippleEffect/useRippleEffect"

interface ButtonProps {
   variant: 'outlined' | 'filled' 
   color?: string
   icon?: ReactNode | null
   className?: string | null
}

const Button = ({variant, color, icon = null, className = "", children}: PropsWithChildren<ButtonProps>) => {
   const buttonRef = useRef(null);
   
   let variantStyles;
   let colorStyles;


   switch (variant) {
      case 'outlined':
         variantStyles = styles.outlined
         break
      case 'filled':
         variantStyles = styles.filled
         break
   }

   switch (color) {
      case 'primary':
         colorStyles = styles.primaryColor
         break
      case 'secondary':
         colorStyles = styles.secondaryColor
         break
      default:
         colorStyles = styles.primaryColor
   }

  useRippleEffect(buttonRef)

  return (
    <button 
      className={[styles.button, colorStyles, variantStyles, className].join(" ")} 
      ref={buttonRef}
   >
      {icon}
      {children}
    </button>
  )
}

export default Button
