import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { MAP_CENTER, MAP_LOCATIONS } from "../data/map.data";

export const Map = () => {
  return (
    <header className="map__header">
      <MapContainer
        center={MAP_CENTER}
        zoom={4}
        style={{ height: "510px", width: "90%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {MAP_LOCATIONS.map((location) => (
          <Marker key={location.name} position={location.position}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </header>
  );
};