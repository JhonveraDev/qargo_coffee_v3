import type { CategoryId } from "../types/products.types";

const images = import.meta.glob(
  "../../../assets/images/menu/*.png",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const getImage = (fileName: string) => {
  const path = `../../../assets/images/menu/${fileName}`;
  return images[path];
};

const banner1 = getImage("banner.png");
const banner2 = getImage("our-menu-header-hot-coffee.png");
const banner3 = getImage("banner2.png");

export const headerBanner: Record<CategoryId, string> = {
  "hot-coffee": banner1,
  "cold-coffee": banner2,
  "fresh-cool": banner3,
  "tea": banner1,
  "boba-tea": banner2,
  "cold-brew": banner3,
  "energy-fresh": banner1,
  "energy-smoothies": banner2,
  "breakfast": banner3,
  "lunch-sandwiches": banner1,
  "bakery": banner2,
  "taste-of-italy": banner3,
};