import Button from "@/components/UI/Button/Button";
import styles from "./Tags.module.scss";
import { MouseEvent } from "react";

interface TagsProps {
   tags: string[];
   handleTagClick?: (
      tag: string
   ) => (event: MouseEvent<HTMLButtonElement>) => void;
}

const Tags = ({ tags, handleTagClick }: TagsProps) => {
   return (
      <>
         {tags.map((tag, index) => (
            <Button
               variant="filled"
               className={styles.tag}
               key={index}
               onClick={handleTagClick && handleTagClick(tag)}
            >
               {tag}
            </Button>
         ))}
      </>
   );
};

export default Tags;
