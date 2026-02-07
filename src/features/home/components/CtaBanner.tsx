import { Button, Text, Title } from "../../../ui/components";

import { ctaBannerData } from "../data/ctaBanner.data";

export const CtaBanner = () => {
  const { title, description, image, buttons } = ctaBannerData;

  return (
    <section className="cta-banner">
      <div className="cta-banner__image-wrapper">
        <img
          src={image.src}
          alt={image.alt}
          className="cta-banner__image"
          loading="lazy"
        />
      </div>

      <div className="cta-banner__content">
        <Title
          title={title}
          as="h2"
          size="md"
          className="cta-banner__title"
        />

        <Text
          text={description}
          size="md"
          className="cta-banner__description"
        />

        <div className="cta-banner__buttons">
          {buttons.map(({ id, text, size }) => (
            <Button
              key={id}
              text={text}
              size={size}
              className="cta-banner__button"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
