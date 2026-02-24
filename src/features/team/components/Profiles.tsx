import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import type { SwiperOptions } from "swiper/types";

import { getImage } from "../utils/profile-images.utils";
import { profilesData } from "../data/profiles.data";

import "swiper/css";
import "swiper/css/pagination";

const swiperConfig: SwiperOptions = {
  slidesPerView: 4,
  spaceBetween: 17,
  freeMode: true,
  pagination: { clickable: true },
  modules: [Pagination, FreeMode],
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    660: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    990: {
      slidesPerView: 4,
      spaceBetween: 17,
    },
  },
};

export const Profiles = () => {
  return (
    <section className="profiles">
      {profilesData.map((profileItem) => (
        <div
          key={profileItem.id}
          id={`team-${profileItem.id}`}
          className="profiles-group"
        >
          <h3 className="profiles-group__title">
            {profileItem.team}
          </h3>

          <Swiper {...swiperConfig} className="profiles-group__slider">
            {profileItem.profiles.map((profile) => (
              <SwiperSlide
                key={profile.id}
                className="profiles-group__slide"
              >
                <div className="profile-card">
                  <img
                    src={getImage("our-team", profile.image)}
                    alt={profile.name}
                    className="profile-card__image"
                  />

                  <div className="profile-card__overlay">
                    <div className="profile-card__content">
                      <h3 className="profile-card__name">
                        {profile.name}
                      </h3>

                      <p className="profile-card__role">
                        {profile.title}
                      </p>
                    </div>
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