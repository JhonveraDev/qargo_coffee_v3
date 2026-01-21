import React from "react";
import { Title, Button, Text } from "../../../ui/components/index";

import heroHome from "../../../assets/images/home/hero-home-image.png";

export const HeaderHome = () => {
  return (
    <section className="header-home">
      {/* Background */}
      <div className="header-home__background" />

      <div className="header-home__content">
        <div className="header-home__copy">
          <Title
            title="Keepers of Winter"
            as="h1"
            size="lg"
            className="header-home__title"
          />

          <Text
            text="The enchanted elves gather magical ingredients like gingerbread, chocolate, pistachio, matcha, and more to bring warmth to your winter days."
            size="md"
            className="header-home__text"
          />
        </div>

        <div className="header-home__media">
          <img
            src={heroHome}
            alt="Winter coffee collection"
            className="header-home__image"
          />
        </div>
      </div>

      <div className="header-home__actions">
        <Button text="Order now" className="header-home__button" />
        <Button text="Find a store" className="header-home__button" />
      </div>
    </section>
  );
};
