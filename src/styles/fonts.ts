import OpenSansRegular from "@/assets/fonts/OpenSans/OpenSans-Regular.ttf";
import OpenSansMedium from "@/assets/fonts/OpenSans/OpenSans-Medium.ttf";
import OpenSansBold from "@/assets/fonts/OpenSans/OpenSans-Bold.ttf";
import OpenSansSemiBold from "@/assets/fonts/OpenSans/OpenSans-SemiBold.ttf";

const a = `
@font-face {
   font-family: 'Open Sans, sans-serif';
   font-style: normal;
   font-weight: 400;
   src: local('OpenSans-Regular'), url(${OpenSansRegular}) format('truetype');
   unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
 }

 @font-face {
   font-family: 'Open Sans, sans-serif';
   font-style: normal;
   font-weight: 500;
   src: local('OpenSans-Medium'), url(${OpenSansMedium}) format('truetype');
   unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
 }

 @font-face {
   font-family: 'Open Sans, sans-serif';
   font-style: normal;
   font-weight: 600;
   src: local('OpenSans-SemiBold'), url(${OpenSansSemiBold}) format('truetype');
   unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
 }

 @font-face {
    font-family: 'Open Sans, sans-serif';
    font-style: normal;
    font-weight: 700;
    src: local('OpenSans-Bold'), url(${OpenSansBold}) format('truetype');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  }
`;