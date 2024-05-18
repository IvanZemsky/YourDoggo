import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Gallery.module.scss";
import PageHeader from "@/components/PageHeader/PageHeader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";

const Gallery = () => {
   const handleSearch = () => {};

   const handleInputChange = () => {};

   return (
      <div className="gallery">
         <PageHeader
            input={
               <SearchInput
                  handleSearch={handleSearch}
                  handleInputChange={handleInputChange}
                  value={"34"}
               />
            }
         >
            Ваши фото
         </PageHeader>
         <Wrapper>
            <div className={styles.content}></div>
         </Wrapper>
      </div>
   );
};

export default Gallery;
