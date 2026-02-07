import { Button, Text, Title } from "../../../ui/components";

import { ctaBannerData } from "../data/ctaBanner.data";

export const CtaBanner = () => {
  const { title, description, image, buttons } = ctaBannerData;

  return (
    <section className="home-cta-banner">
      <div className="home-cta-banner__image-wrapper">
        <img
          src={image.src}
          alt={image.alt}
          className="home-cta-banner__image"
          loading="lazy"
        />
      </div>

      <div className="home-cta-banner__content">
        <Title
          title={title}
          as="h2"
          size="md"
          className="home-cta-banner__title"
        />

        <Text
          text={description}
          size="md"
          className="home-cta-banner__description"
        />

        <div className="home-cta-banner__buttons">
          {buttons.map(({ id, text, size }) => (
            <Button
              key={id}
              text={text}
              size={size}
              className="home-cta-banner__button"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
