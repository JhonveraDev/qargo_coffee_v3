// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { popularChoicesData } from '../index';
import { Pagination } from 'swiper';

import { Button } from '../../../ui/components/Button';

import 'swiper/css';
import 'swiper/css/pagination';
import { Title } from '../../../ui/components';

export const PopularChoices = () => {
  return (
    <div className="popular-choices">
      <Title title="Most popular choices" as="h2" size="md" className="popular-choices__title" />
      <Swiper
        slidesPerView={3}
        initialSlide={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="popular-choices__slider"
      >
        {popularChoicesData.map((product, index) => (
          <SwiperSlide key={index} className="popular-choices__slide">
            <img
              src={product.img}
              alt={product.text}
              className="popular-choices__image"
            />

            <Button text={product.text} className="popular-choices__button" />

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
