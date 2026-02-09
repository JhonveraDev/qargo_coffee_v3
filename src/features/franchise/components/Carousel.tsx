import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import type { SwiperOptions } from 'swiper/types';

import { Title, Text } from '../../../ui/components';

import { carouselData } from "../data/carousel.data";

import 'swiper/css';
import 'swiper/css/pagination';

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

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: false }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {carousel.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
