import { LatLng } from "leaflet";
import { Observable } from "rxjs";

interface SensorRepository {
  observeMeasurement: Observable<SensorMeasurement>;
}

export type SensorMeasurement = {
  position: LatLng;
  speed: number | undefined;
  altitude: number | undefined;
};

export const createSensorRepository = (): SensorRepository => {
  const observeMeasurement = new Observable<SensorMeasurement>((observer) => {
    navigator.geolocation.watchPosition(
      (geoPosition: GeolocationPosition) => {
        const position = new LatLng(
          geoPosition.coords.latitude,
          geoPosition.coords.longitude
        );
        const speed = geoPosition.coords.speed
          ? geoPosition.coords.speed * 3.6
          : undefined;
        const altitude = geoPosition.coords.altitude
          ? geoPosition.coords.altitude
          : undefined;
        observer.next({ position, speed, altitude });
      },
      (err: any) => console.error(err),
      { enableHighAccuracy: true }
    );
  });
  return { observeMeasurement };
};
