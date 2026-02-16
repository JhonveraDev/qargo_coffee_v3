import { HeaderBanner } from "../components/HeaderBanner";
import { SideMenu } from "../components/SideMenu";
import { Products } from "../components/Products";

import { useParams, Navigate } from "react-router-dom";
import { menuCategories } from "../data/sideMenu.data";
export const OurMenuPage = () => {
  const { categoryId } = useParams();
  const validCategory = menuCategories.find((c) => c.id === categoryId);

  if (!validCategory) return <Navigate to="/our-menu/hot-coffee" replace />;

  const selectedCategory = validCategory.id;

  return (
    <div className="our-menu-page">
      <HeaderBanner category={selectedCategory} />
      <div className="content">
        <SideMenu />
        <Products category={selectedCategory} />
      </div>
    </div>
  );
};


