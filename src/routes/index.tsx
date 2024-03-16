import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { Layout } from "../components/layout";
import { NotFoundPage } from "../pages/not-found";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route path="/" Component={HomePage} />
        <Route path="*" Component={NotFoundPage} />
      </Route>
    </Routes>
  );
}
