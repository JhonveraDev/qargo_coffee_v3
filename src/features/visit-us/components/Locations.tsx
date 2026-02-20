import { locationsData } from "../data/locations.data";

export const Locations = () => {
  return (
    <div className="visit-us-locations">
      <div className="visit-us-locations__grid">
        {locationsData.map((item) => (
          <button
            key={item.id}
            className="visit-us-locations__button"
          >
            {item.state}
          </button>
        ))}
      </div>
    </div>
  )
}
