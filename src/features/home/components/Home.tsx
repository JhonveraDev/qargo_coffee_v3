import { Title, Text, Button } from "../../../ui/components/index";
import { headerData } from "../data/header.data";

const HomeHeader = () => {
  const { title, description, image, buttons } = headerData;

  return (
    <header className="home-header">
      <div className="home-header__background" aria-hidden="true" />

      <div className="home-header__content">
        <div className="home-header__copy">
          <Title
            title={title}
            as="h1"
            size="lg"
            className="home-header__title"
          />

          <Text
            text={description}
            size="lg"
            className="home-header__text"
          />
        </div>

        <div className="home-header__media">
          <img
            src={image.src}
            alt={image.alt}
            className="home-header__image"
          />
        </div>
      </div>

      <div className="home-header__actions">
        {buttons.map((button, index) => (
          <Button
            key={index}
            text={button.text}
            size={button.size}
            className="home-header__button"
          />
        ))}
      </div>
    </header>
  );
};

export default HomeHeader;
