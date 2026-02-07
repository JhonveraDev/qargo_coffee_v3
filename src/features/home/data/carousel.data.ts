import type { CarouselItem, CarouselTitleData } from "../types/carousel.types";

import a1 from '../../../assets/images/home/home-popular-choice-01.png';
import a2 from '../../../assets/images/home/home-popular-choice-02.png';
import a3 from '../../../assets/images/home/home-popular-choice-03.png';

export const carouselTitle: CarouselTitleData = {
  title: "Popular Choice",
};

export const carouselData: CarouselItem[] = [
  { id: 1, img: a1, text: "Frosted Apple Chai" },
  { id: 2, img: a2, text: "Pumpkin Pixie Latte" },
  { id: 3, img: a3, text: "Pumpkin Pixie Latte" },
  { id: 4, img: a1, text: "Frosted Apple Chai" },
  { id: 5, img: a2, text: "Pumpkin Pixie Latte" },
  { id: 6, img: a3, text: "Pumpkin Pixie Latte" },
];