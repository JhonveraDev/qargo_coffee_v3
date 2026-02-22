import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import { NavBar } from "./ui/layout/NavBar";
import { Footer } from "./ui/layout/Footer";

import { HomePage } from "./features/home/page/HomePage";
import { FranchisePage } from "./features/franchise/page/FranchisePage";
import { OurMenuPage } from "./features/menu/page/OurMenuPage";
import { ProductDetailPage } from "./features/menu/page/ProductDetailPage";
import { VisitUsPage } from "./features/visit-us/page/VisitUsPage";
import { TeamPage } from "./features/team/pages/TeamPage";

function Layout() {
  const location = useLocation();

  const hideFooter = location.pathname.startsWith("/our-menu");

  return (
    <div className="app-container">
      <NavBar />
      <main className="page-container">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="franchise" element={<FranchisePage />} />

        <Route path="our-menu">
          <Route index element={<Navigate to="hot-coffee" replace />} />
          <Route path=":categoryId">
            <Route index element={<OurMenuPage />} />
            <Route path=":productId" element={<ProductDetailPage />} />
          </Route>
        </Route>

        <Route path="locations" element={<VisitUsPage />} />
        <Route path="about" element={<TeamPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
