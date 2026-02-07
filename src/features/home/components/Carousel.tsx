import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import type { SwiperOptions } from 'swiper/types';

import { Title, Button } from "../../../ui/components";

import { carouselItemsData, carouselTitleData } from "../data/carousel.data";

import leaf from '../../../assets/images/home/home-popular-leaf.png';

import 'swiper/css';
import 'swiper/css/pagination';

const swiperConfig:SwiperOptions = {
  centeredSlides: true,
  loop: true,
  initialSlide: 1,
  pagination: { clickable: false },
  modules: [Pagination],
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    896: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
};

export const Carousel = () => {
  return (
    <section className="home-carousel">
      <Title title={carouselTitleData.title} as="h2" size="sm" className="home-carousel__title" />

      <Swiper {...swiperConfig}>
        {carouselItemsData.map((item) => (
          <SwiperSlide key={item.id} className="home-carousel__slide">
            <div className="leaf-container">
              <img src={leaf} alt="" className="leaf leaf-1" />
            </div>
            <img
              src={item.img}
              alt={item.text}
              className="home-carousel__image"
            />

            <Button text={item.text} size="lg" className="home-carousel__button" />

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
