import { Run } from "../domain/run/Run";

export const runs: Run[] = [
  {
    runId: 1,
    startTime: 1,
    endTime: 2,
    track: {
      trackPoints: [
        { latitude: 55.1, longitude: 10, time: 1.5 },
        { latitude: 55.2, longitude: 10, time: 1.5 },
        { latitude: 55.2, longitude: 10.1, time: 1.5 },
        { latitude: 55.1, longitude: 10.1, time: 1.5 },
        { latitude: 55.1, longitude: 10, time: 1.5 },
      ],
    },
  },
  {
    runId: 2,
    startTime: 1,
    endTime: 2,
    track: {
      trackPoints: [
        { latitude: 56.1, longitude: 10, time: 1.5 },
        { latitude: 56.2, longitude: 10, time: 1.5 },
        { latitude: 56.2, longitude: 10.1, time: 1.5 },
        { latitude: 56.1, longitude: 10.1, time: 1.5 },
        { latitude: 56.1, longitude: 10, time: 1.5 },
      ],
    },
  },
  {
    runId: 3,
    startTime: 1,
    endTime: 2,
    track: {
      trackPoints: [
        {
          latitude: 53.13006346750497,
          longitude: 8.205932223866116,
          time: 1.5,
        },
        { latitude: 53.12913171763976, longitude: 8.20594563983365, time: 1.5 },
        {
          latitude: 53.12913171763976,
          longitude: 8.206958545382566,
          time: 1.5,
        },
        {
          latitude: 53.13006950469522,
          longitude: 8.206931713447496,
          time: 1.5,
        },
        {
          latitude: 53.13006346750497,
          longitude: 8.205932223866116,
          time: 1.5,
        },
      ],
    },
  },
];
