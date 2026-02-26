import mapImage from "../../../assets/images/home/home-cta-map.png";

import type { CtaMapContent } from "../types/ctaMap.types";

export const ctaMapData: CtaMapContent = {
  title: "Find a store near you",
  description: "Experience Italian coffee culture, local charm, and unique flavors in a warm, welcoming atmosphere.",
  image: {
    src: mapImage,
    alt: "Store map",
  },
  button: {
    text: "Explore Locations",
    size: "md",
    path: "/locations",
  },
};