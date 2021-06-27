import { Track } from "./Track";

export interface Run {
  runId: number;
  startTime: number;
  endTime: number;
  track: Track;
}
