import { Button } from "@mui/material";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
   return (
      <Button component={Link} to="/" variant="contained" color="primary">
         About Page
      </Button>
   );
};

export default Logo;
