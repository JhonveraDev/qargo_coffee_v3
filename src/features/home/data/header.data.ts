import heroHome from "../../../assets/images/home/home-header-image.png";

import type { HeaderContent } from "../types/header.types";

export const headerData: HeaderContent = {
  title: "Keepers of Winter",
  description: "The enchanted elves gather magical ingredients like gingerbread, chocolate, pistachio, matcha, and more to bring warmth to your winter days.",
  image: {
    src: heroHome,
    alt: "Winter coffee collection",
  },
  buttons: [
    {
      id: "order",
      text: "Order now",
      size: "md",
      path: "/our-menu/hot-coffee",
    },
    {
      id: "store",
      text: "Find a store",
      size: "md",
      path: "/locations",
    },
  ],
};