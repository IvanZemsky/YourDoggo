import { Link } from "react-router-dom"
import styles from './ProductCard.module.scss'

interface ProductCardProps {
   id: string,
   category: string,
   name: string,
   description: string,
   price: number
}

const ProductCard = ({id, category, name, description, price}: ProductCardProps) => {

  return (
    <Link to={`/shop/${id}`}>
      <div className={styles.card}>
         <div className={styles.imgWrap}>
            <p className={styles.category}>{category}</p>
            <img src="https://images.unsplash.com/photo-1601306187938-754636bc78c2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
         </div>
         <div className={styles.info}>
            <p className={styles.name}>{name}</p>
            <p className={styles.desc}>{description}</p>
            <p className={styles.price}>{price} ₽</p>
         </div>
      </div>
    </Link>
  )
}

export default ProductCard
