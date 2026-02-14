import type { Product } from "../types/products.types";

import hc01 from "../../../assets/images/menu/elemento-01.png";
import hc02 from "../../../assets/images/menu/elemento-02.png";
import hc03 from "../../../assets/images/menu/elemento-01.png";
import hc04 from "../../../assets/images/menu/elemento-04.png";

export const allProducts: Product[] = [
  { id: 1, category: "hot-coffee", name: "Caffe Latte", image: hc01 },
  { id: 2, category: "cold-coffee", name: "Cappuccino", image: hc02 },
  { id: 3, category: "fresh-cool", name: "Iced Latte", image: hc03 },
  { id: 4, category: "hot-coffee", name: "Caffe con leche", image: hc04 },
];