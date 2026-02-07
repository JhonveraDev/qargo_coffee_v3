import heroHome from "../assets/hero-home.png";
import type { HeaderData } from "../types/header.types";

export const headerData:HeaderData = {
  title: "Keepers of Winter",
  description:
    "The enchanted elves gather magical ingredients like gingerbread, chocolate, pistachio, matcha, and more to bring warmth to your winter days.",
  image: {
    src: heroHome,
    alt: "Winter coffee collection",
  },
  buttons: [
    {
      text: "Order now",
      size: "md",
    },
    {
      text: "Find a store",
      size: "md",
    },
  ],
};