import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Signin.module.scss";
import Button from "@/components/UI/Button/Button";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/redux";

const Signin = () => {
   const [login, setLogin] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [isLoginClicked, setIsLoginClicked] = useState<boolean>(false);

  const userId = useAppSelector((state) => state.authSlice.userId);

  useEffect(() => {
    if (isLoginClicked) {
      const url = `http://localhost:3001/users/?login=${login}`;
      fetch(url)
        .then((result) => result.json())
        .then((result) => console.log(result[0]));
    }
  }, [isLoginClicked]);

  const handleLoginClick = () => {
    setIsLoginClicked(true);
  };

   return (
      <div className={styles.auth}>
         <Wrapper>
            <div className={styles.content}>
               <form className={styles.form}>
                  <input
                     type="text"
                     className={styles.input}
                     placeholder="Логин"
                     value={login}
                     onChange={(e) => setLogin(e.target.value)}
                  />
                  <input
                     type="password"
                     className={styles.input}
                     placeholder="Пароль"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button variant="outlined" type="button" onClick={handleLoginClick}>
                     Войти
                  </Button>
               </form>
            </div>
         </Wrapper>
      </div>
   );
};

export default Signin;
