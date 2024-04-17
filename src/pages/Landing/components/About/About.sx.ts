import { Styles } from '@/components/types/styles';
import { MainThemePalette } from "@/themes/MainTheme/options/MainThemePalette";

const styles: Styles = {
   container: {
      padding: '70px 0',
      color: MainThemePalette.primary.contrastText,
      backgroundColor: MainThemePalette.primary.light,
   },
   info: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      alignItems: 'center',
      gap: '28px',
   },
   desc: {
      "& p:first-of-type": {
         mb: 2
      }
   },
   paper: {
      aspectRatio: '1 / 1.1',
      flexShrink: 0,
      borderRadius: 3,
      overflow: 'hidden',

      '& img': {
         objectFit: 'cover',
         width: '100%',
         height: '100%',
      }
   }

}

export default styles
