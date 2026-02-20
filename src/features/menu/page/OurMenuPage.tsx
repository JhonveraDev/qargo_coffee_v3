import { Navigate } from "react-router-dom";

import { HeaderBanner, SideMenu, Products } from "../index";

import { useMenuCategory } from "../hooks/useMenuCategory";

export const OurMenuPage = () => {
  const { validCategory } = useMenuCategory();

  if (!validCategory) {
    return <Navigate to="/our-menu/hot-coffee" replace />;
  }

  return (
    <div className="our-menu">
      <HeaderBanner category={validCategory.id} />

      <div className="our-menu__content">
        <SideMenu />
        <Products category={validCategory} />
      </div>
    </div>
  );
};