import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { NavBar } from "./ui/layout/NavBar";
import { Footer } from "./ui/layout/Footer";

import { HomePage } from "./features/home/page/HomePage";
import { FranchisePage } from "./features/franchise/page/FranchisePage";
import { OurMenuPage } from "./features/menu/page/OurMenuPage";

function Layout() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="page-container">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="franchise" element={<FranchisePage />} />
        <Route path="our-menu" element={<OurMenuPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
