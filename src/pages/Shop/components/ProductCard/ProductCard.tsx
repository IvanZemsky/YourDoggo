import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import { findProductCategory } from "@/helpers/findProductCategory";
import { AnchorHTMLAttributes, memo } from "react";

interface ProductCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
   id: string;
   name: string;
   category: string;
   description: string;
   img: string;
   price: number;
}

const ProductCard = memo(({ id, name, category, description, price, img, ...attributes }: ProductCardProps) => {
   const categoryValue = findProductCategory(category)

   return (
      <Link to={`/shop/${id}`} onClick={attributes.onClick}>
         <div className={styles.card}>
            <div className={styles.imgWrap}>
               <p className={styles.category}>{categoryValue}</p>
               <img
                  src={img}
                  alt="Обложка"
               />
            </div>
            <div className={styles.info}>
               <p className={styles.name}>{name}</p>
               <p className={styles.desc}>{description}</p>
               <p className={styles.price}>{price} ₽</p>
            </div>
         </div>
      </Link>
   );
});

export default ProductCard;
