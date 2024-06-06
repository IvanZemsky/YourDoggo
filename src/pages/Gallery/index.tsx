import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Gallery.module.scss";
import ImagesList from './components/ImagesList/ImagesList';
import GalleryHeader from './components/GalleryHeader/GalleryHeader';
import { useAppSelector } from "@/hooks/redux";

const Gallery = () => {
  
   const userId = useAppSelector(state => state.auth.userId)

   return (
      <div className={styles.content}>
         <GalleryHeader userId={userId}/>
         <Wrapper>
            <ImagesList/>
         </Wrapper>
      </div>
   );
};

export default Gallery;
