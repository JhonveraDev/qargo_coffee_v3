import { Title, Button, Text } from "../../../ui/components";
import { useNavigate } from "react-router-dom";

import { headerFranchiseData } from "../data/header.data";

export const Header = () => {
  const { title, description, image, buttons } = headerFranchiseData;
  const navigate = useNavigate();

  return (
    <header className="franchise-header">
      <div className="franchise-header__background" aria-hidden />
      <div className="franchise-header__content">
        <Title
          title={title}
          as="h1"
          size="lg"
          className="franchise-header__title"
        />

        <img
          src={image.src}
          alt=""
          className="franchise-header__mobile-image"
          loading="eager"
          aria-hidden="true"
        />

        <Text
          text={description}
          size="lg"
          className="franchise-header__text"
        />

        <div className="franchise-header__actions">
          {buttons.map(({ id, text, size, variant, path, onClick}) => (
            <Button
              key={id}
              text={text}
              size={size}
              className={`franchise-header__button franchise-header__button--${variant}`}
              onClick={onClick ?? (() => { if (path) navigate(path); })}
            />
          ))}
        </div>
      </div>
    </header>
  );
};