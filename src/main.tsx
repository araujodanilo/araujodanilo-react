import "./index.css";

import { AppRoutes } from "./routes";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
