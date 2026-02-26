import { Button, Text, Title } from "../../../ui/components";
import { useNavigate } from "react-router-dom";

import { ctaBannerData } from "../data/ctaBanner.data";

export const CtaBanner = () => {
  const { title, description, image, buttons } = ctaBannerData;
  const navigate = useNavigate();

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
          {buttons.map(({ id, text, size, path }) => (
            <Button
              key={id}
              text={text}
              size={size}
              className="home-cta-banner__button"
              onClick={() => { if (path) navigate(path); }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
