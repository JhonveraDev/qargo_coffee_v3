import type { MenuCategory, Product, CategoryId} from "../types/products.types";

import banner from "../../../assets/images/menu/banner.png";
import bannera from "../../../assets/images/menu/our-menu-header-hot-coffee.png";
import bannerb from "../../../assets/images/menu/banner2.png";

export const menuCategories: MenuCategory[]= [
  { id: "hot-coffee", label: "Hot Coffee" },
  { id: "cold-coffee", label: "Cold Coffee" },
  { id: "fresh-cool", label: "Fresh & Cool" },
];

export const headerBanners: Record<CategoryId, string> = {
  "hot-coffee": banner,
  "cold-coffee": bannera,
  "fresh-cool": bannerb,
};

export const allProducts: Product[]= [
  { id: 1, category: "hot-coffee", name: "Caffe Latte" },
  { id: 2, category: "cold-coffee", name: "Cappuccino" },
  { id: 3, category: "fresh-cool", name: "Iced Latte" },
];