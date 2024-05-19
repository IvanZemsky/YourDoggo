import styles from './ProductsSkeleton.module.scss'

interface ProductsSkeletonProps {
  limit: number
}

const ProductsSkeleton = ({limit}: ProductsSkeletonProps) => {
  const skeletonBlocks = Array.from({ length: limit }, (_, index) => (
    <div key={index} className={styles.skeletonBlock}></div>
  ));

  return (
    <div className={styles.skeleton}>
      {skeletonBlocks}
    </div>
  );
}

export default ProductsSkeleton
