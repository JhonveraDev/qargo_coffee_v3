import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import type { SwiperOptions } from 'swiper/types';

import { Title, Text } from '../../../ui/components';

import { carouselData } from "../data/carousel.data";

import 'swiper/css';
import 'swiper/css/pagination';

const swiperConfig: SwiperOptions = {
  centeredSlides: true,
  loop: true,
  initialSlide: 0,
  pagination: { clickable: false },
  modules: [Pagination],
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    896: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
};

export const Carousel = () => {

  const { title, description, carousel } = carouselData;

  return (
    <section className="franchise-carousel">
      <Title
        title={title}
        as="h2"
        size="sm"
        className="franchise-carousel__title"
      />

      <Text
        text={description}
        size="lg"
        className="franchise-carousel__description"
      />
      <div className="franchise-carousel__slider">
        <Swiper {...swiperConfig} className="franchise-carousel__swiper">
          {carousel.map((item) => (
            <SwiperSlide key={item.id} className="franchise-carousel__slide">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
