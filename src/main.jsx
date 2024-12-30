import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SidebarCtx from "./store/SidebarCtx.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarCtx>
      <App />
    </SidebarCtx>
  </StrictMode>
);
