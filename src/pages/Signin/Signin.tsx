import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Signin.module.scss";
import Button from "@/components/UI/Button/Button";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Link } from "react-router-dom";
import { fetchLoginUser } from "@/store/slices/authSlice";
import { useAuth } from "@/hooks/useAuth";

const Signin = () => {
   const [login, setLogin] = useState<string>("");
   const [password, setPassword] = useState<string>("");

   const userLogin = useAppSelector(state => state.auth.userLogin)

   const [handleLoginClick] = useAuth({login, password})

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
                  <div className={styles.panel}>
                     <Button variant="outlined" type="button" onClick={handleLoginClick}>
                        Войти
                     </Button>
                     <Link to="" className={styles.signupLink}>Не зарегистрированны? Создайте аккаунт!</Link>
                     <p>{userLogin}</p>
                  </div>
               </form>
            </div>
         </Wrapper>
      </div>
   );
};

export default Signin;
