import { LatLng } from "leaflet";

interface SensorRepository {
  getMeasurement: () => Promise<SensorMeasurement>;
}

type SensorMeasurement = {
  position: LatLng;
  speed: number | undefined;
  altitude: number | undefined;
};

export const createSensorRepository = (): SensorRepository => {
  const getMeasurement = (): Promise<SensorMeasurement> => {
    return new Promise((resolve, reject) => {
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
          resolve({ position, speed, altitude });
        },
        (err: any) => reject(err),
        { enableHighAccuracy: true }
      );
    });
  };

  return { getMeasurement };
};
