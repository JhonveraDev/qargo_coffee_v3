import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import { Title, Button } from "../../../ui/components/index";

import { popularChoicesData } from '../index';
import leaf from '../../../assets/images/home/home-popular-leaf.png';

import 'swiper/css';
import 'swiper/css/pagination';

const swiperConfig = {
  centeredSlides: true,
  loop: true,
  initialSlide: 1,
  pagination: { clickable: false },
  modules: [Pagination],
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    896: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
};

export const PopularChoices = () => {
  return (
    <section className="popular-choices">
      <Title title="Most popular choices" as="h2" size="sm" className="popular-choices__title" />

      <Swiper {...swiperConfig}>
        {popularChoicesData.map((product) => (
          <SwiperSlide key={product.id} className="popular-choices__slide">
            <div className="leaf-container">
              <img src={leaf} alt="Leaf" className="leaf leaf-1" />
            </div>
            <img
              src={product.img}
              alt={product.text}
              className="popular-choices__image"
            />

            <Button text={product.text} size="lg" className="popular-choices__button" />

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
