import heroHome from "../../../assets/images/home/hero-home-image.png";

import type { HeaderData } from "../types/header.types";

export const headerData: HeaderData = {
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
    },
    {
      id: "store",
      text: "Find a store",
      size: "md",
    },
  ],
};