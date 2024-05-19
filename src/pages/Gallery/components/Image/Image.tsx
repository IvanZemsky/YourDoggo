import styles from './Image.module.scss'

interface ImageProps {
   id: string
   user: string
   title: string
   tags: string[]
   img: string
   datetime: any
}

const Image = ({id, user, title, tags, img, datetime}: ImageProps) => {
  return (
    <div className={styles.content}>
      <img src={img} alt={title} />
      <div className={styles.info}>
         <p className={styles.title}>
            {title}
         </p>
      </div>
    </div>
  )
}

export default Image
