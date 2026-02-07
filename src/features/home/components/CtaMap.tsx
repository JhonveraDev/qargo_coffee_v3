import { Button, Text, Title } from "../../../ui/components";

import { ctaMapData } from "../data/ctaMap.data";

export const CtaMap = () => {
  const { title, description, image, button } = ctaMapData;

  return (
    <section className="cta-map">
      <div className="cta-map__wrapper">
        <img
          src={image.src}
          alt={image.alt}
          className="cta-map__image"
          loading="lazy"
        />

        <div className="cta-map__content">
          <Title
            title={title}
            as="h3"
            size="md"
            className="cta-map__title"
          />

          <Text
            text={description}
            size="md"
            className="cta-map__description"
          />

          <Button
            text={button.text}
            size={button.size}
            className="cta-map__button"
          />
        </div>
      </div>
    </section>
  );
};
