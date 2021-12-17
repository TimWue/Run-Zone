import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import { RunnerContext } from "../../../context/RunnerContext";
import { createSensorRepository } from "../../../domain/sensor/SensorRepository";
import { LatLng } from "leaflet";
import { Subscription } from "rxjs";

interface Props {}

export const RenderPosition: FunctionComponent<Props> = () => {
  const [position, setPosition] = useState<LatLng>();
  const [subscription, setSubscription] = useState<Subscription>();
  const map = useMap();
  const sensorRepository = createSensorRepository();

  useEffect(() => {
    setSubscription(
      sensorRepository.observeMeasurement.subscribe((m) => {
        const position = new LatLng(m.position.lat, m.position.lng);
        setPosition(position);
        map.setView(position);
      })
    );
    return () => {
      subscription && subscription.unsubscribe();
    };
  }, []);

  return <>{position && <Marker position={position} />}</>;
};
