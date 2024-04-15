import { createTheme } from "@mui/material"
import OpenSansRegular from '@/assets/fonts/OpenSans/OpenSans-Regular.ttf';
import OpenSansMedium from '@/assets/fonts/OpenSans/OpenSans-Medium.ttf';
import OpenSansBold from '@/assets/fonts/OpenSans/OpenSans-Bold.ttf';
import OpenSansSemiBold from '@/assets/fonts/OpenSans/OpenSans-SemiBold.ttf';
import PlatypiBold from '@/assets/fonts/Platypi-Bold.ttf';

export const OpenSansTheme = createTheme({
  typography: {
    fontFamily: 'Platypi, serif',
    h1: {
      fontWeight: 700,
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'OpenSans';
          font-style: normal;
          font-weight: 400;
          src: local('OpenSans'), url(${OpenSansRegular}) format('truetype');
        }

        @font-face {
          font-family: 'OpenSans';
          font-style: normal;
          font-weight: 500;
          src: local('OpenSans'), url(${OpenSansMedium}) format('truetype');
        }

        @font-face {
          font-family: 'OpenSans';
          font-style: normal;
          font-weight: 600;
          src: local('OpenSans'), url(${OpenSansBold}) format('truetype');
        }

        @font-face {
          font-family: 'Platypi, serif'; // Исправлено на Platypi
          font-style: normal;
          font-weight: 700;
          src: local('Platypi'), url(${PlatypiBold}) format('truetype');
        }
      `,
    },
  },
});
