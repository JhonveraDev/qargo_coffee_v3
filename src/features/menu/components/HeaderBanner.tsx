import { getImage } from "../utils/products-images.utils";

import { headerBanner } from "../data/headerBanner.data";

import type { CategoryId } from "../types/products.types";

export const HeaderBanner = ({ category }: { category: CategoryId }) => {
  return (
    <header className="our-menu__banner">
      <img src={getImage("banners", headerBanner[category])} alt={category} />
    </header>
  );
};
