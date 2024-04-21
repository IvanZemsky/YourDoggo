import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Gallery.module.scss";
import PageHeader from "@/components/PageHeader/PageHeader";

const Gallery = () => {
   return (
      <div className="gallery">
         <PageHeader></PageHeader>
         <Wrapper>
            <div className={styles.content}></div>
         </Wrapper>
      </div>
   );
};

export default Gallery;
