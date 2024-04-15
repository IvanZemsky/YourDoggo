import styles from "./App.module.scss";
import { Routes, Route } from "react-router";
import Layout from "./../Layout/Layout";
import Landing from "@/pages/Landing/Landing";
import MainTheme from "@/themes/MainTheme";

const App = () => {
   return (
      <MainTheme>
         <div className={styles.app}>
               <Routes>
                  <Route path="/" element={<Layout />}>
                     <Route index element={<Landing />} />
                  </Route>
               </Routes>
            </div>
      </MainTheme>
   );
};

export default App;
