import styles from "./App.module.scss";
import { Routes, Route } from "react-router";
import Layout from './../Layout/Layout';
import Landing from "@/pages/Landing/Landing";


const App = () => {
   return (
      <div className={styles.app}>
         <Routes>
            <Route path="/" element={<Layout/>}>
               <Route index element={<Landing />} />
            </Route>
         </Routes>
      </div>
   );
};

export default App;
