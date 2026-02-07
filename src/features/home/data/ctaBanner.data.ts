import blogImage from "../../../assets/images/home/home-start-your-franchise.png";

import type { CtaBannerContent } from "../types/ctaBanner.types";

export const ctaBannerData: CtaBannerContent = {
  title: "Start your own coffee franchise",
  description: "Turn your passion for coffee into a thriving business. Partner with us and bring authentic Italian flavors, premium beverages, and a modern experience to your community.",
  image: {
    src: blogImage,
    alt: "Start your own coffee franchise",
  },
  buttons: [
    {
      id: "connect",
      text: "Connect with us",
      size: "md",
    },
    {
      id: "learn",
      text: "Learn more",
      size: "md",
    },
  ],
};
