import { PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
   interface Palette {
    third: PaletteColor
   }
   interface PaletteOptions {
    third: PaletteColor
   }
 }
 
 declare module "@mui/material/Button" {
   interface ButtonPropsColorOverrides {
    third: true;
   }
 }

 declare module "@mui/material/Button" {
   interface ButtonPropsVariantOverrides {
      color: 'inherit' | 'primary' | 'secondary' | 'third' | 'success' | 'error' | 'info' | 'warning'
   }
}

declare module "@mui/material/IconButton" {
   interface IconButtonPropsColorOverrides {
      color: 'inherit' | 'primary' | 'secondary' | 'third' | 'success' | 'error' | 'info' | 'warning'
   }
}