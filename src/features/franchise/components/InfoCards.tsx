import React, { useCallback, useRef, useState } from "react";

import { Title, Text } from "../../../ui/components";

import { infoCardsTextData, infoCardsData } from "../data/infoCards.data";

import infoCardCheck from "../../../assets/images/franchise/franchise-check.png";

export const InfoCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.firstElementChild as HTMLElement | null;
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 16;

    const index = Math.round(
      container.scrollLeft / (cardWidth + gap)
    );

    setActiveIndex(index);
  }, []);

  return (
    <section className="franchise-info-cards">
      <div className="franchise-info-cards__content">
        <Title
          title={infoCardsTextData.title}
          as="h2"
          size="sm"
          className="franchise-info-cards__title"
        />

        <Text
          text={infoCardsTextData.description}
          size="lg"
          className="franchise-info-cards__description"
        />
      </div>

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="franchise-info-cards__cards"
      >
        {infoCardsData.map(
          ({ id, image, title, description, features }) => (
            <article key={id} className="franchise-info-cards__card">
              <img
                src={image}
                alt={title}
                className="franchise-info-cards__card-image"
              />

              <div className="franchise-info-cards__card-content">
                <h3 className="franchise-info-cards__card-title">{title}</h3>
                <p className="franchise-info-cards__card-text">{description}</p>

                <ul className="franchise-info-cards__card-list">
                  {features.map((feature, index) => (
                    <li
                      key={`${id}-feature-${index}`}
                      className="franchise-info-cards__card-item"
                    >
                      <img src={infoCardCheck} alt="" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        )}
      </div>

      <div className="franchise-info-cards__dots">
        {infoCardsData.map((_, index) => (
          <span
            key={`dot-${index}`}
            className={`dot ${
              index === activeIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};
