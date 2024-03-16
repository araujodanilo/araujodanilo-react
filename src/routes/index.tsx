import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { Layout } from "../components/layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route path="/" Component={HomePage} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}
