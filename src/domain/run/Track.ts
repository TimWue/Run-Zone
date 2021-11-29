import { TrackPoint } from "./TrackPoint";
import { Distance } from "./Distance";

export interface Track {
  trackPoints: TrackPoint[];
  distances: Distance[];
}
