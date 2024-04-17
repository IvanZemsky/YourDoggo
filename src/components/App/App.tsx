import styles from "./App.module.css";
import { Routes, Route } from "react-router";
import Layout from "./../Layout/Layout";
import MainThemeProvider from "@/themes/MainTheme/MainThemeProvider";
import { LazyArticles as Articles } from "@/pages/Articles/LazyArticles";
import { LazyForum as Forum } from "@/pages/Forum/LazyForum";
import { LazyShop as Shop } from "@/pages/Shop/LazyShop";
import { LazyGallery as Gallery } from "@/pages/Gallery/LazyGallery";
import { LazyLanding as Landing } from "@/pages/Landing/LazyLanding";

const App = () => {
   return (
      <MainThemeProvider>
         <div className={styles.app}>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Landing />} />
                  <Route path="/articles" element={<Articles />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/forum" element={<Forum />} />
                  <Route path="/gallery" element={<Gallery />} />
               </Route>
            </Routes>
         </div>
      </MainThemeProvider>
   );
};

export default App;
