import { Title, Button, Text } from "../../../ui/components";
import { useNavigate } from "react-router-dom";

import { ctaContactData } from "../data/ctaContact.data";

export const CtaContact = () => {
  const { title, description, buttons } = ctaContactData;
  const navigate = useNavigate();

  return (
    <section className="franchise-cta-contact">
      <div className="franchise-cta-contact__background"></div>
      <div className="franchise-cta-contact__content">
        <Title
          title={title}
          as="h2"
          size="sm"
          className="franchise-cta-contact__title"
        />

        <Text
          text={description}
          size="lg"
          className="franchise-cta-contact__description"
        />

        <div className="franchise-cta-contact__actions">
          {buttons.map(({ id, text, size, variant, path, onClick }) => (
            <Button
              key={id}
              text={text}
              size={size}
              className={`franchise-cta-contact__button franchise-cta-contact__button--${variant}`}
              onClick={onClick ?? (() => { if (path) navigate(path); })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};