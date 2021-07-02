import {TrackPoint} from "../run/TrackPoint";
import {LatLngTuple} from "leaflet";
import {area, polygon} from "@turf/turf";

export interface MapService {
  track2Polygon: (trackPoints: TrackPoint[]) => LatLngTuple[];
  calcArea: (polygonPoints: TrackPoint[]) => number;
}

export const createMapService = (): MapService => {
  return {
    track2Polygon(trackPoints: TrackPoint[]): LatLngTuple[] {
      return trackPoints.map((trackPoint) => {
        return [trackPoint.latitude, trackPoint.longitude];
      });
    },
    calcArea(polygonPoints: TrackPoint[]): number {
      let points: any = polygonPoints.map((trackPoint) => {
        return [trackPoint.latitude, trackPoint.longitude];
      });
      let poly = polygon([points]);
      return area(poly) / 1000000; // from m^2 to km^2
    },
  };
};
