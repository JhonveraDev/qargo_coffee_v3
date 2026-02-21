import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import type { SwiperOptions } from "swiper/types";

import { locationsData } from "../data/locations.data";

import "swiper/css";
import "swiper/css/pagination";

const swiperConfig: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 24,
  freeMode: true,
  pagination: { clickable: true },
  modules: [Pagination, FreeMode],
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
};

export const CardLocations = () => {
  return (
    <section className="visit-us-card-locations">
      {locationsData.map((stateItem) => (
        <div
          key={stateItem.id}
          id={`state-${stateItem.id}`}
          className="visit-us-card-locations__state"
        >
          <h3 className="visit-us-card-locations__title">
            {stateItem.state}
          </h3>

          <Swiper
            {...swiperConfig}
            className="visit-us-card-locations__swiper"
          >
            {stateItem.locations.map((location) => (
              <SwiperSlide
                key={location.id}
                className="visit-us-card-locations__slide"
              >
                <div className="visit-us-card-locations__card">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="visit-us-card-locations__image"
                  />

                  <div className="visit-us-card-locations__overlay">
                    <div className="overlay__container">
                      <div className="overlay__header">
                        <h4 className="overlay__title">{location.name}</h4>
                      </div>
                      <div className="overlay__info">
                        <div className="overlay__block">
                          <span className="overlay__label">VISIT US</span>
                          <p className="overlay__text">
                            {location.address}
                          </p>
                        </div>

                        <div className="overlay__block">
                          <span className="overlay__label">CALL US</span>
                          <p className="overlay__text" >
                            {location.phone}
                          </p>
                        </div>
                      </div>
                      <div className="overlay__actions">
                        <button className="overlay__button">
                          View More
                        </button>
                      </div>
                    </div>

                  </div>

                  <div className="visit-us-card-locations__card-footer">
                    {location.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </section>
  );
};