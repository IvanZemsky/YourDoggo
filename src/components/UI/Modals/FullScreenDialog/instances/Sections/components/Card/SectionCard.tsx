import { ButtonBase, Typography, Card } from "@mui/material";
import styles from "./SectionCard.sx";
import { Link } from "react-router-dom";
import { memo } from "react";

interface SectionCardProps {
   link: string;
   name: string;
   desc: string;
}

const SectionCard = memo(({ link, name, desc }: SectionCardProps) => {
   return (
      <ButtonBase component={Link} to={link}>
         <Card variant="outlined" sx={styles.card}>
            <Typography variant="h2">{name}</Typography>
            <Typography variant="body1">{desc}</Typography>
         </Card>
      </ButtonBase>
   );
});

export default SectionCard;
