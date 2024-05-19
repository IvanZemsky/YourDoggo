import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Gallery.module.scss";
import ImagesList from './components/ImagesList/ImagesList';
import GalleryHeader from './components/GalleryHeader/GalleryHeader';

const Gallery = () => {
  

   return (
      <div className={styles.content}>
         <GalleryHeader />
         <Wrapper>
            <ImagesList/>
         </Wrapper>
      </div>
   );
};

export default Gallery;
