import { Wrapper } from "@/shared/ui"
import styles from "./Cart.module.scss"
import { RoutesEnum } from "@/constants/routes"
import CartProductList from "./components/CartProductList/CartProductList"
import CartOrder from "./components/CartOrder/CartOrder"
import { PageLink } from "@/shared/ui/PageLink/PageLink"

const Shop = RoutesEnum.Shop

const Cart = () => {
  return (
    <Wrapper>
      <section className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>Корзина</h2>
          <PageLink
            variant="none"
            shadow={false}
            to={`/${Shop}`}
            className={styles.headerLink}
          >
            Назад в магазин
          </PageLink>
        </header>
        <div className={styles.products}>
          <CartProductList />
          <CartOrder />
        </div>
      </section>
    </Wrapper>
  )
}

export default Cart
