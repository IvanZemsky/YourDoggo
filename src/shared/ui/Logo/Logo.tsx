import { useMediaQuery } from "react-responsive"
import { PawIcon } from "../icons"
import styles from "./Logo.module.scss"
import { ComponentProps } from "react"
import { PageLink } from "../PageLink/PageLink"

export const Logo = ({ ...attributes }: ComponentProps<"a">) => {
   const is350px = useMediaQuery({ maxWidth: 350 })

   return (
      <PageLink
         to="/"
         hasRippleEffect
         {...attributes}
         variant="outlined"
         icon={<PawIcon />}
         className={styles.logo}
      >
         {!is350px && "YourDoggo"}
      </PageLink>
   )
}
