import styles from "./ProductImg.module.scss";

interface ProductImgProps {
   img: string
}

const ProductImg = ({img}: ProductImgProps) => {
   return (
      <div className={styles.imgWrap}>
         <img
            src={img}
            alt="Изображение товара"
         />
      </div>
   );
};

export default ProductImg;
