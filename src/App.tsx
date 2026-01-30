import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { HomePage } from "./features/home/page/HomePage";
import { NavBar } from "./ui/layout/NavBar";
import { Footer } from "./ui/layout/Footer";

function Layout() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
