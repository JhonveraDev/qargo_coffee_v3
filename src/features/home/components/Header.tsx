import { Title, Text, Button } from "../../../ui/components";
import { useNavigate } from "react-router-dom";
import { headerData } from "../data/header.data";

export const Header = () => {
  const { title, description, image, buttons } = headerData;
  const navigate = useNavigate();

  return (
    <header className="home-header">
      <div className="home-header__background" aria-hidden="true" />

      <div className="home-header__content">
        <div className="home-header__copy">
          <Title
            as="h1"
            size="lg"
            title={title}
            className="home-header__title"
          />
          <Text
            size="lg"
            text={description}
            className="home-header__text"
          />
        </div>

        <div className="home-header__media">
          <img
            src={image.src}
            alt={image.alt}
            loading="eager"
            className="home-header__image"
          />
        </div>
      </div>

      <div className="home-header__actions">
        {buttons.map(({ id, text, size, path }) => (
          <Button
            key={id}
            text={text}
            size={size}
            className="home-header__button"
            onClick={() => { if (path) navigate(path); }}
          />
        ))}
      </div>
    </header>
  );
};