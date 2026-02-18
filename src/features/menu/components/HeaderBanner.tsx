import { getImage } from "../utils/products-images.utils";

import { headerBanner, headerBannerMobile } from "../data/headerBanner.data";

import type { CategoryId } from "../types/products.types";

export const HeaderBanner = ({ category }: { category: CategoryId }) => {
  return (
    <header className="our-menu__banner">
      <picture>
        <source
          media="(max-width: 720px)"
          srcSet={getImage("banners", headerBannerMobile[category])}
        />

        <img
          src={getImage("banners", headerBanner[category])}
          alt={category}
        />
      </picture>
    </header>
  );
};
