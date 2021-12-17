import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import { RunnerContext } from "../../../context/RunnerContext";
import { createSensorRepository } from "../../../domain/sensor/SensorRepository";
import { LatLng } from "leaflet";

interface Props {}

export const RenderPosition: FunctionComponent<Props> = () => {
  const [position, setPosition] = useState<LatLng>();
  const map = useMap();
  const sensorRepository = createSensorRepository();

  useEffect(() => {
    sensorRepository.getMeasurement().then((m) => {
      const position = new LatLng(m.position.lat, m.position.lng);
      setPosition(position);
      map.setView(position);
    });
  }, []);

  return <>{position && <Marker position={position} />}</>;
};
