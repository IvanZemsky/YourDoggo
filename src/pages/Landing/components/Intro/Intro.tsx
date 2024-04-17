import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./Intro.module.css";
import { overrideButtons } from "@/themes/MainTheme/MainTheme";
import FullScreenDialog from '@/components/UI/Modals/FullScreenDialog/FullScreenDialog';
import { useModal } from "@/components/UI/Modals/useModal";
import Sections from '@/components/UI/Modals/FullScreenDialog/instances/Sections/Sections';

const Intro = () => {
   const {isOpened, handleOpen, handleClose} = useModal();

   console.log(1);

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
               <Button variant="contained" sx={overrideButtons.contained} onClick={handleOpen}>
                  Начать!
               </Button>
            </Box>
         </Container>

         <FullScreenDialog isOpened={isOpened}>
            <Sections handleClose={handleClose} />
         </FullScreenDialog>

      </Box>
   );
};

export default Intro;
