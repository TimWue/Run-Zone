import { TrackPoint } from "../run/TrackPoint";
import { LatLngTuple } from "leaflet";
import { area, polygon } from "@turf/turf";
import { getDistance } from "geolib";

export interface MapService {
  track2Polygon: (trackPoints: TrackPoint[]) => LatLngTuple[];
  calcArea: (polygonPoints: TrackPoint[]) => number;
  calcDistance: (startPoint: TrackPoint, endPoint: TrackPoint) => number;
}

export const createMapService = (): MapService => {
  const track2Polygon = (trackPoints: TrackPoint[]): LatLngTuple[] => {
    return trackPoints.map((trackPoint) => {
      return [trackPoint.latitude, trackPoint.longitude];
    });
  };

  const calcArea = (polygonPoints: TrackPoint[]): number => {
    let points: any = polygonPoints.map((trackPoint) => {
      return [trackPoint.latitude, trackPoint.longitude];
    });
    let poly = polygon([points]);
    return area(poly) / 1000000; // from m^2 to km^2
  };

  const calcDistance = (
    startTrackPoint: TrackPoint,
    endTrackPoint: TrackPoint
  ) => {
    const start = {
      latitude: startTrackPoint.latitude,
      longitude: startTrackPoint.longitude,
    };

    const end = {
      latitude: endTrackPoint.latitude,
      longitude: endTrackPoint.longitude,
    };
    return getDistance(start, end, 0.5);
  };

  return { calcArea, track2Polygon, calcDistance };
};
