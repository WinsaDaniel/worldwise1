import PropTypes from "prop-types";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  Popup,
  Marker,
  TileLayer,
  useMap,
  //useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../Contexts.jsx/CitiesContext";

function Map() {
  const { cities } = useCities();
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat") || 40;
  const mapLng = searchParams.get("lng") || 0;

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={3}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
ChangeCenter.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default Map;
