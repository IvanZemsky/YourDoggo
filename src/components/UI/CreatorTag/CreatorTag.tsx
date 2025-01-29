import { MouseEventHandler } from "react"
import { Button } from "../Button/Button"
import styles from './CreatorTag.module.scss'

type Props = {
   tag: string
   handleRemove: MouseEventHandler<HTMLButtonElement> | undefined
}

export const CreatorTag = ({tag, handleRemove}: Props) => {
  return (
    <Button className={styles.tag} onClick={handleRemove}>{tag}</Button>
  )
}
