import { ButtonHTMLAttributes, PropsWithChildren, ReactNode, useRef } from 'react'
import styles from './Button.module.scss'
import { useRippleEffect } from "../../../hooks/useRippleEffect/useRippleEffect"

interface ButtonProps {
   variant?: 'outlined' | 'filled' | 'none'
   color?: string
   icon?: ReactNode | null
   className?: string | null
}

type ButtonFullProps = PropsWithChildren<ButtonProps> & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({variant = "filled", color = "primary", icon = null, className = "", children, ...props}: ButtonFullProps) => {
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
      case 'none':
         variantStyles = styles.none
         break
   }

   switch (color) {
      case 'primary':
         colorStyles = styles.primaryColor
         break
      case 'secondary':
         colorStyles = styles.secondaryColor
         break
   }

  useRippleEffect(buttonRef)

  return (
    <button 
      className={[styles.button, colorStyles, variantStyles, className].join(" ")} 
      ref={buttonRef}
      {...props}
   >
      {icon}
      {children}
    </button>
  )
}

export default Button
