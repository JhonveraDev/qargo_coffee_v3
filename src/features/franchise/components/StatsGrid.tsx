import { Title, Text } from "../../../ui/components";

import { statsGridData } from "../data/statsGrid.data";

export const StatsGrid = () => {
  const { title, description, cards } = statsGridData;

  return (
    <section className="franchise-stats-grid">
      <Title
        title={title}
        as="h2"
        size="sm"
        className="franchise-stats-grid__title"
      />

      <Text
        text={description}
        size="lg"
        className="franchise-stats-grid__description"
      />

      <div className="franchise-stats-grid__cards">
        {cards.map(({ title, value }) => (
          <div className="franchise-stats-grid__card" key={title}>
            <h4 className="franchise-stats-grid__card-title">{title}</h4>
            <p className="franchise-stats-grid__card-value">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
