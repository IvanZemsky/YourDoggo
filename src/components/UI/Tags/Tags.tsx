import {Button} from "@/components/UI";
import styles from "./Tags.module.scss";
import { MouseEvent } from "react";

interface TagsProps {
   tags: string[];
   handleTagClick?: (
      tag: string
   ) => (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Tags = ({ tags, handleTagClick }: TagsProps) => {
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