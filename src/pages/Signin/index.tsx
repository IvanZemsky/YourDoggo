import styles from "./Signin.module.scss";
import {Button, Wrapper} from "@/components/UI";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { RoutesEnum } from "@/constants/routes";

const Signin = () => {
   const [login, setLogin] = useState<string>("");
   const [password, setPassword] = useState<string>("");

   const navigate = useNavigate()
   const userId= useAppSelector((state) => state.auth.userId);

   useEffect(() => {
      if (userId) {
         navigate(`/${RoutesEnum.Profile}`)
      }
   }, [userId])

   const [handleLoginClick, errorMessage] = useAuth({ login, password });

   if (!userId) return (
      <div className={styles.auth}>
         <Wrapper>
            <div className={styles.content}>
               <form className={styles.form}>
                  <div className={styles.inputWrap}>
                     <input
                        type="text"
                        className={styles.input}
                        placeholder="Логин"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                     />
                     <small className={styles.errorMessage}>
                        {errorMessage === "LOGIN_ERROR" && "Неверный логин"}
                     </small>
                  </div>
                  <div className={styles.inputWrap}>
                     <input
                        type="password"
                        className={styles.input}
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <small className={styles.errorMessage}>
                        {errorMessage === "PASSWORD_ERROR" && "Неверный пароль"}
                     </small>
                  </div>
                  <div className={styles.panel}>
                     <Button
                        variant="outlined"
                        type="button"
                        onClick={handleLoginClick}
                     >
                        Войти
                     </Button>
                     <Link to="" className={styles.signupLink}>
                        Не зарегистрированны? Создайте аккаунт!
                     </Link>
                  </div>
               </form>
            </div>
         </Wrapper>
      </div>
   );
};

export default Signin;
