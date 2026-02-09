import data01 from "../../../assets/images/franchise/franchise-business-model-01.png";
import data02 from "../../../assets/images/franchise/franchise-business-model-02.png";
import data03 from "../../../assets/images/franchise/franchise-business-model-03.png";
import data04 from "../../../assets/images/franchise/franchise-business-model-04.png";

import type { InfoCardsTextContent, InfoCardsContent } from "../types/infocards.types";

export const infoCardsTextData: InfoCardsTextContent = {
  title: "Our Business Models",
  description: "Choose from four proven Qargo Coffee franchise formats, each designed to match different markets, locations, and investment levels. However you think big, there’s a Qargo built for you!",
};

export const infoCardsData: InfoCardsContent[] = [
  {
    id: 1,
    image: data01,
    title: "Mobile Container",
    description:
      "Compact mobile unit perfect for high-traffic locations and events",
    features: [
      "20 ft mobile container",
      "Movable unit",
      "Quick service model",
      "High-traffic locations",
      "Lower investment",
    ],
  },
  {
    id: 2,
    image: data02,
    title: "Kiosk",
    description:
      "Agile, high-efficiency formats ideally suited for high-traffic locations such as shopping malls, airports, supermarkets, and food courts",
    features: [
      "190 to 800 sq ft",
      "Compact footprint",
      "Shared infrastructure ready",
      "Full Qargo experience",
      "Speed and flexibility",
    ],
  },
  {
    id: 3,
    image: data03,
    title: "End Cap or Metro Area Stores",
    description:
      "Upscale interior design with premium seating and artistic atmosphere",
    features: [
      "700 to 2,500 sq ft",
      "Premium interior design",
      "Artisan coffee bar",
      "Event space",
    ],
  },
  {
    id: 4,
    image: data04,
    title: "Flagship Store",
    description:
      "Full-service coffee shop with modern architecture and outdoor seating",
    features: [
      "2500+ sq ft",
      "Indoor & outdoor seating",
      "Full food menu",
      "Drive-thru optional",
    ],
  },
];
