import { PaletteColor, PaletteOptions } from "@mui/material";

interface MainThemePalette extends PaletteOptions {
    primary: PaletteColor
    secondary: PaletteColor
    third: PaletteColor
}



const MainThemePalette: MainThemePalette = {
   primary: {
      main: "#2196f3",
      dark: "",
      light: "",
      contrastText: "#ffffff"
   },
   secondary: {
      main: "#f50057",
      dark: "",
      light: "",
      contrastText: "#ffffff"
   },
   third: {
      main: "#ffffff",
      dark: "",
      light: "",
      contrastText: "#ffffff"
   }
   
}

// Экспортируем объект
export { MainThemePalette };