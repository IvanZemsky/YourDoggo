import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import { categories } from "@/data/categories";
import { findProductCategory } from "@/helpers/findProductCategory";

interface ProductCardProps {
   id: string;
   name: string;
   category: string;
   description: string;
   price: number;
}

const ProductCard = ({ id, name, category, description, price }: ProductCardProps) => {
   const categoryValue = findProductCategory(category)

   return (
      <Link to={`/shop/${id}`}>
         <div className={styles.card}>
            <div className={styles.imgWrap}>
               <p className={styles.category}>{categoryValue}</p>
               <img
                  src="https://images.unsplash.com/photo-1601306187938-754636bc78c2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
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
};

export default ProductCard;
