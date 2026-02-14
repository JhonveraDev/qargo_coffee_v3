import type { CategoryId } from "../types/products.types";

import banner from "../../../assets/images/menu/banner.png";
import bannera from "../../../assets/images/menu/our-menu-header-hot-coffee.png";
import bannerb from "../../../assets/images/menu/banner2.png";

export const headerBanners: Record<CategoryId, string> = {
  "hot-coffee": banner,
  "cold-coffee": bannera,
  "fresh-cool": bannerb,
  "tea": banner,
  "boba-tea": bannera,
  "cold-brew": bannerb,
  "energy-fresh": banner,
  "energy-smoothies": bannera,
  "breakfast": bannerb,
  "lunch-sandwiches": banner,
  "bakery": bannera,
  "taste-of-italy": bannerb,
};