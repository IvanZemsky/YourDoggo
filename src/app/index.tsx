import { createRoot } from "react-dom/client";
import App from "../components/App/App";
import { HashRouter } from "react-router-dom";

import './styles/fonts.scss'
import '@/shared/ui/styles/_vars.scss'
import './styles/reset.scss'

import { Provider } from "react-redux";
import { store } from "../store/store";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <Provider store={store}>
      <HashRouter>
         <App />
      </HashRouter>
   </Provider>
);
