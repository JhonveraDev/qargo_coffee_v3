import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import type { SwiperOptions } from "swiper/types";
import { useNavigate } from "react-router-dom";

import { getImage } from "../utils/location-images.utils";
import { locationsData } from "../data/locations.data";

import "swiper/css";
import "swiper/css/pagination";

const swiperConfig: SwiperOptions = {
  freeMode: true,
  modules: [Pagination, FreeMode],
  pagination: {
    clickable: false,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    990: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
};

export const CardLocations = () => {
  const navigate = useNavigate();

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
            {stateItem.locations.map((location) => {
              const { id, name, image, address, phone, path, comingSoon } = location;

              return (
                <SwiperSlide
                  key={id}
                  className="visit-us-card-locations__slide"
                >
                  <div className="visit-us-card-locations__card">
                    <img
                      src={getImage("visit-us", image)}
                      alt={name}
                      className="visit-us-card-locations__image"
                    />

                    <div className={`visit-us-card-locations__overlay ${comingSoon ? "visit-us-card-locations__overlay--disabled" : ""}`}>
                      <div className="overlay__container">
                        <div className="overlay__header">
                          <h4 className="overlay__title">{name}</h4>
                        </div>
                        <div className="overlay__info">
                          <div className="overlay__block">
                            <span className="overlay__label">VISIT US</span>
                            <p className="overlay__text">{address}</p>
                          </div>

                          <div className="overlay__block">
                            <span className="overlay__label">CALL US</span>
                            <p className="overlay__text">{phone}</p>
                          </div>
                        </div>
                        <div className="overlay__actions">
                          <button
                            className="overlay__button"
                            onClick={() => { if (path) navigate(path); }}
                          >
                            View More
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="visit-us-card-locations__card-footer">
                      {name}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ))}
    </section>
  );
};