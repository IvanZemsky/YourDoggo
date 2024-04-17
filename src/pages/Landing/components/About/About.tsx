import { Box, Container, Paper, Typography, Divider } from "@mui/material"
import styles from './About.sx'
import corgi from '@/assets/img/welsh-corgi.jpg'

const About = () => {
  return (
    <Box sx={styles.container}>
      <Container>
         <Box sx={styles.info}>
            <Box sx={styles.desc}>
               <Typography>
                  Мы предоставляем пользователям-владельцам собак или желающим приобрести питомца возможность
                  общаться, писать и читать статьи, пользоваться нашим магазином товаров.
               </Typography>
               <Typography>
                  Наша цель - максимально упростить вам жизнь, если у вас есть собака, за которой вы ухаживаете. Мы стремимся
                  включить важнейшие удобства по теме на наш сайт.
               </Typography>
            </Box>
            <Paper elevation={12} sx={styles.paper}>
               <img src={corgi} alt="Welsh corgi (illustratuon)" />
            </Paper>
         </Box>
    </Container>
    </Box>
  )
}

export default About
