import { LazyArticles as Articles } from "@/pages/Articles/LazyArticles";
import { LazyForum as Forum } from "@/pages/Forum/LazyForum";
import { LazyShop as Shop } from "@/pages/Shop/LazyShop";
import { LazyGallery as Gallery } from "@/pages/Gallery/LazyGallery";
import { LazyLanding as Landing } from "@/pages/Landing/LazyLanding";
import { LazyCart as Cart } from "@/pages/Cart/LazyCart";
import { LazySignin as Signin} from '@/pages/Signin/LazySignin'
import { LazyProfile as Profile} from '@/pages/Profile/LazyProfile'
import { Routes, Route } from "react-router";
import Layout from "../Layout/Layout";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route path="/signin" element={<Signin />}/>
            <Route path="profile" element={<Profile/>}/>
            <Route index element={<Landing />} />
            <Route path="articles" element={<Articles />} />
            <Route path="shop" element={<Shop />}/>
            <Route path="shop/cart" element={<Cart />} />
            <Route path="forum" element={<Forum />} />
            <Route path="gallery" element={<Gallery />} />
         </Route>
      </Routes>
   );
};

export default AppRoutes;
