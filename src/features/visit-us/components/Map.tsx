import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { MAP_CENTER, MAP_LOCATIONS } from "../service/map.base";

const customMarker = new L.Icon({
  iconUrl: "/location-pin.svg",
  iconSize: [40, 50],
  iconAnchor: [20, 50],
  popupAnchor: [0, -50],
});

export const Map = () => {
  return (
    <header className="map__header">
      <MapContainer
        center={MAP_CENTER}
        zoom={4}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="© OpenStreetMap contributors © CARTO"
        />

        {MAP_LOCATIONS.map((location) => (
          <Marker
            key={location.slug}
            position={location.position}
            icon={customMarker}
          >
            <Popup>
              <div className="popup__container" style={{ textAlign: "center" }}>
                <img
                  src={location.cityImage}
                  alt={location.name}
                  style={{
                    width: "90px",
                    height: "auto",
                    borderRadius: "8px",
                    marginBottom: "8px",
                  }}
                />
                <h4>{location.name}</h4>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </header>
  );
};