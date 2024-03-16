import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}
