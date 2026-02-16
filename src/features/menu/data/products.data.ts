import type { Product } from "../types/products.types";

export const allProducts: Product[] = [
  {
    id: "caffe-latte",
    category: "hot-coffee",
    name: "Caffe Latte",
    thumbnail: "elemento-01.png",
    mainImage: "dummy-data.png"
  },
  {
    id: "cappuccino",
    category: "cold-coffee",
    name: "Cappuccino",
    thumbnail: "elemento-02.png",
    mainImage: "elemento-04.png"
  },
  {
    id: "iced-latte",
    category: "fresh-cool",
    name: "Iced Latte",
    thumbnail: "elemento-03.png",
    mainImage: "elemento-04.png"
  },
  {
    id: "caffe-con-leche",
    category: "hot-coffee",
    name: "Caffe con leche",
    thumbnail: "elemento-04.png",
    mainImage: "elemento-04.png"
  },
];
