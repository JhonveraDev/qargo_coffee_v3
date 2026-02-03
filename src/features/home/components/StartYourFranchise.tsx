import { Button, Text, Title } from "../../../ui/components";

import blogImage from "../../../assets/images/home/home-start-your-franchise.png";

export const StartYourFranchise = () => {
  return (
    <section className="start-franchise">
      <div className="start-franchise__image-wrapper">
        <img
          src={blogImage}
          alt="Start your own coffee franchise"
          className="start-franchise__image"
        />
      </div>

      <div className="start-franchise__content">
        <Title title="Start your own coffee franchise" as="h2" size="md" className="start-franchise__title" />

        <Text
          text="Turn your passion for coffee into a thriving business. Partner with us and bring authentic Italian flavors, premium beverages, and a modern experience to your community."
          size="md"
          className="start-franchise__description"
        />

        <div className="start-franchise__buttons">
          <Button text="Connect with us" size="md" className="start-franchise__button" />
          <Button text="Learn more" size="md" className="start-franchise__button" />
        </div>
      </div>
    </section>
  );
};