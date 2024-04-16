import MontserratRegular from "@/assets/fonts/Montserrat/Montserrat-Regular.ttf";
import MontserratMedium from "@/assets/fonts/Montserrat/Montserrat-Medium.ttf";
import MontserratSemiBold from "@/assets/fonts/Montserrat/Montserrat-SemiBold.ttf";
import MontserratBold from "@/assets/fonts/Montserrat/Montserrat-Bold.ttf";

export const Montserrat = `
   @font-face {
      font-family: 'Montserrat';
      src: local('Montserrat-Regular'),
         url(${MontserratRegular}) format('truetype');
      font-weight: 400;
      font-style: normal;
   }

   @font-face {
      font-family: 'Montserrat';
      src: local('Montserrat-Medium'),
         url(${MontserratMedium}) format('truetype');
      font-weight: 500;
      font-style: normal;
   }

   @font-face {
      font-family: 'Montserrat';
      src: local(${MontserratSemiBold}),
         url('../assets/fonts/Montserrat/Montserrat-SemiBold.ttf') format('truetype');
      font-weight: 600;
      font-style: normal;
   }

   @font-face {
      font-family: 'Montserrat';
      src: local('Montserrat-Bold'),
         url(${MontserratBold}) format('truetype');
      font-weight: 700;
      font-style: normal;
   }
`;
