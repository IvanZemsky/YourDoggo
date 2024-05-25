import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Wrapper.module.scss";

type WrapperType = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

const Wrapper = ({ children, ...attributes }: WrapperType) => {
   return (
      <div className={styles.wrapper} {...attributes}>
         {children}
      </div>
   );
};

export default Wrapper;
