import { headerBanner } from "../data/headerBanner.data";
import type { CategoryId } from "../types/products.types";

export const HeaderBanner = ({ category }: { category: CategoryId }) => {
  return (
    <div className="header-banner">
      <img src={headerBanner[category]} alt={category} />
    </div>
  );
};