import Wrapper from "@/components/UI/Wrapper/Wrapper"
import styles from './Product.module.scss'
import { useFetchProductByIdQuery } from "@/services/ProductService"
import { useParams } from "react-router"
import Loading from "@/components/Loading/Loading"

const Product = () => {
  const {id} = useParams()
  const {data: product, isLoading, isError} = useFetchProductByIdQuery(id as string)

  return (
    <Wrapper>
      <div className={styles.content}>
        {isLoading && <Loading/>}
        {isError && <p>Ошибка :(</p>}
        {product && (
          product.name
        )}
      </div>
    </Wrapper>
  )
}

export default Product
