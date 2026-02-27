import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

const customMarker = new L.Icon({
  iconUrl: "/location-pin.svg",
  iconSize: [40, 50],
  iconAnchor: [20, 50],
  popupAnchor: [0, -50],
});
import { MAP_CENTER, MAP_LOCATIONS } from "../data/map.data";

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
            key={location.name}
            position={location.position}
            icon={customMarker}
          >
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </header>
  );
};