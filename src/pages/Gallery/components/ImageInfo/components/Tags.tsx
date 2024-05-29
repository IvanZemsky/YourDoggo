import Button from "@/components/UI/Button/Button";
import styles from "./Tags.module.scss";
import { useAppDispatch } from "@/hooks/redux";
import { setTextQuery } from "@/store/slices/gallery/galleryFilterSlice";
import { MouseEvent } from 'react';
import { closeModal } from "@/store/slices/modalSlice";

interface TagsProps {
   tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
   const dispatch = useAppDispatch()

   const handleTagClick = (tag: string) => (event: MouseEvent<HTMLButtonElement>) => {
      dispatch(closeModal())
      dispatch(setTextQuery(tag));
   };

   return (
      <>
         {tags.length ? (
            <div className={styles.tags}>
               {tags.map((tag, index) => (
                  <Button variant="filled" className={styles.tag} key={index} onClick={handleTagClick(tag)}>
                     {tag}
                  </Button>
               ))}
            </div>
         ) : null}
      </>
   );
};

export default Tags;
