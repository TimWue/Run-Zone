import { TrackPoint } from "../run/TrackPoint";
import { LatLng, LatLngTuple } from "leaflet";
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
    const start = new LatLng(
      startTrackPoint.latitude,
      startTrackPoint.longitude
    );
    const end = new LatLng(endTrackPoint.latitude, endTrackPoint.longitude);

    return start.distanceTo(end);
  };

  return { calcArea, track2Polygon, calcDistance };
};
