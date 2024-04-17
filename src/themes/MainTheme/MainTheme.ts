import { createTheme } from "@mui/material";
import { Montserrat } from "./options/MontserratFont";
import { MainThemePalette } from "./options/MainThemePalette";

export const MainTheme = createTheme({
   palette: MainThemePalette,
   typography: {
      fontFamily: "Montserrat",
      h1: {
         fontSize: 30,
         fontWeight: 700,
      },
      h2: {
         fontSize: 24,
         fontWeight: 700,
      },
      body1: {
         fontSize: 20,
      },
   },
   components: {
      MuiCssBaseline: {
         styleOverrides: Montserrat,
      },
   },
});

export const overrideButtons = {
   contained: { borderRadius: 15, padding: "10px 22px", fontSize: "17px", textTransform: 'none' },
};
