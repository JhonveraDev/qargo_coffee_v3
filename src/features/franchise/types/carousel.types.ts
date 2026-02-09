export interface Carousel {
  id: string;
  image: string;
  title: string;
  text: string;
}

export interface CarouselContent {
  title: string;
  description: string;
  carousel: Carousel[];
}
