import { Box, Button} from "@mui/material";
import styles from "./Sections.sx";
import SectionCard from "./components/Card/SectionCard";

const cards = [
   {
      name: "Статьи",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit unde ipsam hic quas id molestias ad vel quam minima",
      link: "/articles",
   },
   {
      name: "Магазин",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit unde ipsam hic quas id molestias ad vel quam minima",
      link: "/shop",
   },
   {
      name: "Форум",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit unde ipsam hic quas id molestias ad vel quam minima",
      link: "/forum",
   },
];

interface SectionsProps {
   handleClose: () => void;
}

const Sections = ({ handleClose }: SectionsProps) => {
   return (
      <Box sx={styles.content}>
         <Box sx={styles.cards}>
            {cards.map((card) => (
               <SectionCard
                  key={card.name}
                  link={card.link}
                  name={card.name}
                  desc={card.desc}
               />
            ))}
         </Box>
         <Button variant="outlined" size="large" onClick={handleClose} sx={styles.backBtn}>
            Назад
         </Button>
      </Box>
   );
};

export default Sections;
