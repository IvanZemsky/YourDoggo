import PageHeader from "@/components/PageHeader/PageHeader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import {
   setTextQuery,
} from "@/store/slices/gallery/galleryFilterSlice";
import GalleryMenu from "../GalleryMenu/GalleryMenu";

const GalleryHeader = () => {
   return (
      <PageHeader input={<SearchInput dispatchFunc={setTextQuery} />}>
        <GalleryMenu/>
      </PageHeader>
   );
};

export default GalleryHeader;
