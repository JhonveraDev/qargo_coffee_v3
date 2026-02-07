import { Button, Text, Title } from "../../../ui/components";

import { ctaMapData } from "../data/ctaMap.data";

export const CtaMap = () => {
  const { title, description, image, button } = ctaMapData;

  return (
    <section className="home-cta-map">
      <div className="home-cta-map__wrapper">
        <img
          src={image.src}
          alt={image.alt}
          className="home-cta-map__image"
          loading="lazy"
        />

        <div className="home-cta-map__content">
          <Title
            title={title}
            as="h3"
            size="md"
            className="home-cta-map__title"
          />

          <Text
            text={description}
            size="md"
            className="home-cta-map__description"
          />

          <Button
            text={button.text}
            size={button.size}
            className="home-cta-map__button"
          />
        </div>
      </div>
    </section>
  );
};
