import Button from "@/components/UI/Button/Button";
import { Link } from "react-router-dom";

const SigninLink = () => {
   return (
      <Link to="/signin">
         <Button variant="outlined" color="secondary">
            Войти
         </Button>
      </Link>
   );
};

export default SigninLink;
