import { Track } from "./Track";

export interface Run {
  runId: string;
  startTime: number;
  endTime: number;
  track: Track;
}
