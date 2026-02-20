import { Title, Text } from "../../../ui/components";
import arrow from "../../../assets/images/franchise/arrow.svg";

import { useDropdown } from "../hooks/useDropdown";

export const Dropdown = () => {
  const {
    content,
    visibleItems,
    expanded,
    toggleExpanded,
  } = useDropdown();

  return (
    <section className="franchise-dropdown">
      <div className="franchise-dropdown__content">
        <Title
          title={content.title}
          as="h2"
          size="sm"
          className="franchise-dropdown__main-title"
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
          onClick={toggleExpanded}
        >
          {expanded ? "See less" : "See more"}
          <img
            src={arrow}
            alt=""
            className={expanded ? "arrow arrow--up" : "arrow"}
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
};