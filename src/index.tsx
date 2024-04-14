import { createRoot } from "react-dom/client";
import App from "./components/App/App";

import { BrowserRouter } from "react-router-dom";

import "./styles/reset.scss";
import "./styles/_vars.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
