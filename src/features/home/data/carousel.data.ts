import a1 from '../../../assets/images/home/home-carousel-item-01.png';
import a2 from '../../../assets/images/home/home-carousel-item-02.png';
import a3 from '../../../assets/images/home/home-carousel-item-03.png';

import type { CarouselItemContent, CarouselTitleContent } from "../types/carousel.types";

export const carouselTitleData: CarouselTitleContent = {
  title: "Popular Choice",
};

export const carouselItemsData: CarouselItemContent[] = [
  { id: 1, img: a1, text: "Frosted Apple Chai" },
  { id: 2, img: a2, text: "Pumpkin Pixie Latte" },
  { id: 3, img: a3, text: "Pumpkin Pixie Latte" },
  { id: 4, img: a1, text: "Frosted Apple Chai" },
  { id: 5, img: a2, text: "Pumpkin Pixie Latte" },
  { id: 6, img: a3, text: "Pumpkin Pixie Latte" },
];