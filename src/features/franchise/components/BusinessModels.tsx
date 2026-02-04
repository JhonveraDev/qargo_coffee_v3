import React, { useRef, useState } from "react";
import { Title, Text } from "../../../ui/components/index";

import { BUSINESS_MODELS } from "../data/businessModels.data";
import franchiseCheck from "../../../assets/images/franchise/franchise-check.png";

export const BusinessModels: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const scrollLeft = containerRef.current.scrollLeft;
    const card = containerRef.current.firstElementChild as HTMLElement;

    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 16;

    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(index);
  };

  return (
    <section className="business-models"> 

      <div className="business-models__content">
        <Title
          title="Our Business Models"
          as="h2"
          size="sm"
          className="business-models__title"
        />

        <Text
          text="Choose from four proven Qargo Coffee franchise formats, each designed to
          match different markets, locations, and investment levels. However you
          think big, there’s a Qargo built for you!"
          size="md"
          className="business-models__description"
        />
      </div>

      <div
        className="business-models__cards"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {BUSINESS_MODELS.map(
          ({ id, image, title, description, features }) => (
            <article key={id} className="business-models__card">
              <img
                className="business-models__card-image"
                src={image}
                alt={title}
              />

              <div className="business-models__card-content">
                <h3 className="business-models__card-title">{title}</h3>

                <p className="business-models__card-text">{description}</p>

                <ul className="business-models__card-list">
                  {features.map((feature) => (
                    <li key={feature} className="business-models__card-item">
                      <img src={franchiseCheck} alt="" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        )}
      </div>

      <div className="business-models__dots">
        {BUSINESS_MODELS.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};
