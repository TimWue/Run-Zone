import { Run } from "../domain/run/Run";

export const runs: Run[] = [
  {
    runId: 1,
    startTime: 1,
    endTime: 2,
    track: {
      trackPoints: [
        { latitude: 50.1, longitude: 10, time: 1.5 },
        { latitude: 50.2, longitude: 10, time: 1.5 },
        { latitude: 50.2, longitude: 10.1, time: 1.5 },
        { latitude: 50.1, longitude: 10.1, time: 1.5 },
        { latitude: 50.1, longitude: 10, time: 1.5 },
      ],
    },
  },
  {
    runId: 2,
    startTime: 1,
    endTime: 2,
    track: {
      trackPoints: [
        { latitude: 51.1, longitude: 10, time: 1.5 },
        { latitude: 51.2, longitude: 10, time: 1.5 },
        { latitude: 51.2, longitude: 10.1, time: 1.5 },
        { latitude: 51.1, longitude: 10.1, time: 1.5 },
        { latitude: 51.1, longitude: 10, time: 1.5 },
      ],
    },
  },
  {
    runId: 3,
    startTime: 1,
    endTime: 2,
    track: {
      trackPoints: [
        { latitude: 50.1, longitude: 11, time: 1.5 },
        { latitude: 50.2, longitude: 11, time: 1.5 },
        { latitude: 50.2, longitude: 11.1, time: 1.5 },
        { latitude: 50.1, longitude: 11.1, time: 1.5 },
        { latitude: 50.1, longitude: 11, time: 1.5 },
      ],
    },
  },
];
