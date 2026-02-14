import type { Product } from "../types/products.types";

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

export const allProducts: Product[] = [
  {
    id: 1,
    category: "hot-coffee",
    name: "Caffe Latte",
    image: getImage("elemento-01.png")
  },
  {
    id: 2,
    category: "cold-coffee",
    name: "Cappuccino",
    image: getImage("elemento-02.png")
  },
  {
    id: 3,
    category: "fresh-cool",
    name: "Iced Latte",
    image: getImage("elemento-03.png")
  },
  {
    id: 4,
    category: "hot-coffee",
    name: "Caffe con leche",
    image: getImage("elemento-04.png")
  },
];