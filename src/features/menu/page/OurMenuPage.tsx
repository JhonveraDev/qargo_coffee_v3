import { useState } from "react";

import { HeaderBanner } from "../components/HeaderBanner";
import { SideMenu } from "../components/SideMenu";
import { Products } from "../components/Products";

import type { CategoryId } from "../types/products.types";

export const OurMenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("hot-coffee");

  return (
    <div className="our-menu-page">
      <HeaderBanner category={selectedCategory} />

      <div className="content">
        <SideMenu selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <Products category={selectedCategory} />
      </div>
    </div>
  );
}
