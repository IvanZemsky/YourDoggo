import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { Montserrat } from "./MontserratFont";
import { PropsWithChildren } from "react";

const OpenSansTheme = createTheme({
   typography: {
      fontFamily: "Montserrat",
      h1: {
         fontWeight: 700,
      },
   },
   components: {
      MuiCssBaseline: {
         styleOverrides: Montserrat,
      },
   },
});

const MainTheme = ({children}: PropsWithChildren) => {
  return (
   <ThemeProvider theme={OpenSansTheme}>
      <CssBaseline />
         <Box sx={{ fontFamily: "Montserrat" }}>
            {children}
         </Box>
    </ThemeProvider>
  )
}

export default MainTheme

