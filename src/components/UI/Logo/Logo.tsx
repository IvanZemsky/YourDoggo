import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";

const Logo = () => {
   return (
      <Button
         component={Link}
         to="/"
         variant="contained"
         color="primary"
         startIcon={<PetsIcon sx={{marginBottom: '3px'}}/>}
         sx={{
            fontSize: 16,
            fontWeight: 700,
            borderRadius: 15,
            textTransform: "none",
            border: "2px solid #fff",
         }}
      >
         YourDoggo
      </Button>
   );
};

export default Logo;
