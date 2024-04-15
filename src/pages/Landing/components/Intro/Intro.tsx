import { Box, Container, Typography } from "@mui/material"
import background from '@/assets/img/samoyed-1.jpg'

const Intro = () => {
  return (
    <Box sx={{ height: '800px', background: `url(${background}) left / cover`}}>
      <Container>
         <Typography variant="h1" fontSize={41} color="white">
            YourDoggo - all about your dog is here!
         </Typography>
         <p style={{fontFamily: "Arial", fontWeight: 700, fontSize: 41}}>YourDoggo - all about your dog is here!</p>
      </Container>
    </Box>
  )
}

export default Intro
