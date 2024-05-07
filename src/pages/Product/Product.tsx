import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Product.module.scss";
import { useFetchProductByIdQuery } from "@/services/ProductService";
import { useParams } from "react-router";
import Loading from "@/components/Loading/Loading";
import Button from '@/components/UI/Button/Button';

const Product = () => {
   const { id } = useParams();
   const {data: product, isLoading, isError} = useFetchProductByIdQuery(id as string);

   return (
      <Wrapper>
         {isLoading && <Loading />}
         {isError && <p>Ошибка :(</p>}
         {product && (
          <div className={styles.content}>
            <div className={styles.imgWrap}>
               <img
                  src="https://images.unsplash.com/photo-1601306187938-754636bc78c2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Изображение товара"
               />
            </div>
            <div className="info">
               <h2 className={styles.name}>{product.name}</h2>
               <p className={styles.desc}>{product.description}</p>
            </div>
            <div className={styles.order}>
               <p className={styles.price}>{product.price} ₽</p>
               <div className={styles.buttons}>
                  <Button color="secondary" variant="filled">В корзину</Button>
               </div>

               {/* {"Избранное"} */}
            </div>
          </div>
         )}
         
      </Wrapper>
   );
};

export default Product;
