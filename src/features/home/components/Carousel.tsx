import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import { useNavigate } from "react-router-dom";

import { Title, Button } from "../../../ui/components";

import { carouselItemsData, carouselTitleData } from "../data/carousel.data";

import leaf from '../../../assets/images/home/home-popular-leaf.png';

import 'swiper/css';
import 'swiper/css/pagination';

const swiperConfig: SwiperOptions = {
  centeredSlides: true,
  loop: true,
  initialSlide: 1,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    clickable: false,
    dynamicBullets: true,
  },
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
  const navigate = useNavigate();

  return (
    <section className="home-carousel">
      <Title
        title={carouselTitleData.title}
        as="h2"
        size="sm"
        className="home-carousel__title"
      />

      <Swiper {...swiperConfig}>
        {carouselItemsData.map((item) => {
          const { id, text, img, path } = item;

          return (
            <SwiperSlide key={id} className="home-carousel__slide">
              <div className="home-leaf-container">
                <img
                  src={leaf}
                  alt=""
                  className="leaf leaf-1"
                  aria-hidden="true"
                />
              </div>

              <img
                src={img}
                alt={text}
                className="home-carousel__image"
              />

              <Button
                text={text}
                size="lg"
                className="home-carousel__button"
                onClick={() => { if (path) navigate(path); }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};