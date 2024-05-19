import { HTMLAttributes, useRef } from 'react'
import styles from './StartModalCard.module.scss'
import { Link } from "react-router-dom"

interface StartModalCardProps {
   link: string;
   name: string;
   desc: string;
}

const StartModalCard = ({link, name, desc, ...props}: StartModalCardProps & HTMLAttributes<HTMLAnchorElement>) => {
  const cardRef = useRef(null);

  return (
    <Link to={link} ref={cardRef} className={styles.card} {...props}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.desc}>
        {desc}
      </p>
    </Link>
  )
}

export default StartModalCard
