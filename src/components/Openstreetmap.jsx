import React, { useEffect, useState } from "react";
// リーフレット
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// Hooksのインポート
import useGeolocation from "@hooks/useGeolocation";
import MapCenterUpdater from "@hooks/useMapCenterUpdater";
// Servicesのインポート
import { getMapTileUrl } from "@services/Openstreetmap";
import HotPepperAPI from "@services/HotpepperAPI";

const Openstreetmap = () => {
  const { location, getLocation } = useGeolocation();
  const [position, setPosition] = useState([35.682839, 139.759455]);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      setPosition([location.latitude, location.longitude]);
    }
  }, [location]);

  HotPepperAPI();
  console.log(position);
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={getMapTileUrl()}
      />
      <Marker position={position}>
        <Popup>現在地</Popup>
      </Marker>
      <MapCenterUpdater position={position} />
    </MapContainer>
  );
};

export default Openstreetmap;
