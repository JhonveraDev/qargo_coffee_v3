import { locationsData } from "../data/locations.data";

export const Locations = () => {

  const handleScroll = (id: number) => {
    const element = document.getElementById(`state-${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="visit-us-locations">
      <div className="visit-us-locations__grid">
        {locationsData.map((item) => (
          <button
            key={item.id}
            className="visit-us-locations__button"
            onClick={() => handleScroll(item.id)}
          >
            {item.state}
          </button>
        ))}
      </div>
    </div>
  );
};
