import { useState } from "react";
import { Title, Text } from "../../../ui/components";
import { dropdownData } from "../data/dropdown.data";

export const Dropdown = () => {
  const [expanded, setExpanded] = useState(false);

  const content = dropdownData[0];
  const visibleItems = expanded
    ? content.items
    : content.items.slice(0, 2);

  return (
    <section className="franchise-dropdown">
      <div className="franchise-dropdown__content">
        <Title
          title={content.title}
          as="h2"
          size="sm"
          className="franchise-dropdown__title"
        />

        <Text
          text={content.description}
          size="lg"
          className="franchise-dropdown__description"
        />
      </div>

      <div className="franchise-dropdown__steps">
        {visibleItems.map((item, index) => (
          <div className="franchise-dropdown__step" key={index}>
            <div className="franchise-dropdown__step-left">
              <div className="franchise-dropdown__circle">
                {index + 1}
              </div>
            </div>

            <div className="franchise-dropdown__step-content">
              <h4 className="franchise-dropdown__title">
                {item.title}
              </h4>
              <p className="franchise-dropdown__text">
                {item.text}
              </p>
            </div>
          </div>
        ))}

        <button
          className="franchise-dropdown__see-more"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "See less ▲" : "See more ▼"}
        </button>
      </div>
    </section>
  );
};
