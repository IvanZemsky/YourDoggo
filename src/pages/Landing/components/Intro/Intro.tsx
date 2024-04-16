import { Box, Button, Container, Link, Typography } from "@mui/material";
import styles from "./Intro.module.scss";
import { overrideButtons } from "@/themes/MainTheme/MainTheme";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Intro = () => {
   return (
      <Box className={styles.intro}>
         <Container
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
         >
            <Box sx={{ maxWidth: "760px", color: "white" }}>
               <Typography variant="h1" fontSize={41} mb={2}>
                  YourDoggo - всё для вашего любимца здесь!
               </Typography>
               <Typography variant="body1" mb={2}>
                  Самое большое сообщество любителей собак. Читайте статьи,
                  приобретайте товары для питомцев и общайтесь с
                  единомышленниками!
               </Typography>
               <Button variant="contained" sx={overrideButtons.contained}>
                  Начать!
               </Button>
            </Box>
         </Container>
      </Box>
   );
};

export default Intro;
