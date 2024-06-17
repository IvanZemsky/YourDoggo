import { HTMLAttributes, useRef } from 'react'
import styles from './StartModalCard.module.scss'
import PageLink from "@/components/UI/PageLink/PageLink";

interface StartModalCardProps {
   link: string;
   name: string;
   desc: string;
}

const StartModalCard = ({link, name, desc, ...props}: StartModalCardProps & HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <PageLink to={link} variant="outlined" className={styles.card} {...props}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.desc}>
        {desc}
      </p>
    </PageLink>
  )
}

export default StartModalCard
