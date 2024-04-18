import { PropsWithChildren, useRef } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
   variant: 'outlined' | 'filled' 
   color?: string
   icon?: any
   className?: string | null
}

const Button = ({variant, color, icon = null, className, children}: PropsWithChildren<ButtonProps>) => {
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

  return (
    <button 
      className={[styles.button, colorStyles, variantStyles, className].join(" ")} 
      ref={buttonRef}
   >
      {icon}
      <span>
         {children}
      </span>
    </button>
  )
}

export default Button
