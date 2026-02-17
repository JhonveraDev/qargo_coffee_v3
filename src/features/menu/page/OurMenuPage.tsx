import { HeaderBanner } from "../components/HeaderBanner";
import { SideMenu } from "../components/SideMenu";
import { Products } from "../components/Products";

import { useParams, Navigate } from "react-router-dom";

import { menuCategories } from "../data/sideMenu.data";

export const OurMenuPage = () => {
  const { categoryId } = useParams();
  
  const validCategory = menuCategories
    .flatMap((group) => group.items)
    .find((item) => item.id === categoryId);

  if (!validCategory) return <Navigate to="/our-menu/hot-coffee" replace />;

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


