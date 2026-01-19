import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { HomePage } from "./features/home/page/HomePage";
import { NavBar } from "./ui/layout/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <main className="content-wrap">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
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
