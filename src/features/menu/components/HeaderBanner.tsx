import { headerBanners } from "../data/products.data";
import type { CategoryId } from "../types/products.types";

export const HeaderBanner = ({ category }: { category: CategoryId }) => {
  return (
    <div className="header-banner">
      <img src={headerBanners[category]} alt={category} />
    </div>
  );
};