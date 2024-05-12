import styles from './ProductInfo.module.scss'
import AboutProduct from "../AboutProduct/AboutProduct"
import { memo } from "react"

interface ProductInfoProps {
   name: string
   description: string
   parameters: string[][]
}

const ProductInfo = memo(({name, description, parameters}: ProductInfoProps) => {
  return (
   <div className="info">
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.desc}>{description}</p>

      <AboutProduct parameters={parameters} />
   </div>
  )
})

export default ProductInfo
