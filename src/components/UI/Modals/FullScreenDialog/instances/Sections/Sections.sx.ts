import { Styles } from "@/components/types/styles";

const styles: Styles = {
   content: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: '0 auto',
      height: '100%',
   },
   cards: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      justifyContent: 'center',
      gap: 4.5,
      width: '100%',
      mb: 2.5,
   },
   backBtn: {
      padding: '10px 25px',
      alignSelf: "flex-start"
   }
};

export default styles;