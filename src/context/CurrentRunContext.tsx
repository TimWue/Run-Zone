import { createContext, ReactNode, useState } from "react";
import { Run } from "../domain/run/Run";
import { TrackPoint } from "../domain/run/TrackPoint";
import { uuid } from "uuidv4";
import { getDistance } from "geolib";
import { Distance } from "../domain/run/Distance";

interface CurrentRunProps {
  startTime: number | undefined;
  run: Run | undefined;
  startRun: () => void;
  stopRun: () => Promise<Run | undefined>;
  pauseRun: () => void;
  addTrackPoint: (trackPoint: TrackPoint) => void;
  resetRun: () => void;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
}
export const CurrentRunContext = createContext<CurrentRunProps>(
  {} as CurrentRunProps
);

interface ProviderProps {
  children: ReactNode;
}

export const CurrentRunContextProvider = ({ children }: ProviderProps) => {
  const [startTime, setStartTime] = useState<number>();
  const [trackPoints, setTrackPoints] = useState<TrackPoint[]>([]);
  const [distances, setDistances] = useState<Distance[]>([]);
  const [run, setRun] = useState<Run>();
  const [isRunning, setIsRunning] = useState(false);

  const resetRun = () => {
    setRun(undefined);
    setStartTime(undefined);
    setTrackPoints([]);
  };
  const addTrackPoint = (trackPoint: TrackPoint) => {
    const distance =
      trackPoints.length > 0
        ? calculateDistance(trackPoints[trackPoints.length - 1], trackPoint)
        : 0;
    console.log("Add TrackPoint: ", trackPoint);
    setTrackPoints((oldState) => [...oldState, trackPoint]);
    setDistances((oldState) => [...oldState, { distance: distance }]);
  };

  const calculateDistance = (
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

  const startRun = () => {
    console.log("Start Run");
    setStartTime(Date.now());
    setIsRunning(true);
  };

  const pauseRun = () => {
    console.log("Pause Run");
    setIsRunning(false);
  };

  const stopRun = (): Promise<Run | undefined> => {
    console.log("Stop Run");
    if (trackPoints.length === 0) return Promise.resolve(undefined);
    const track = { trackPoints, distances };
    const finishedRun = {
      runId: uuid(),
      track: track,
      startTime: startTime ? startTime : Date.now(),
      endTime: Date.now(),
    };
    setRun(finishedRun);
    setIsRunning(false);
    return Promise.resolve(finishedRun);
  };

  return (
    <CurrentRunContext.Provider
      value={{
        startTime,
        isRunning,
        setIsRunning,
        run,
        startRun,
        stopRun,
        pauseRun,
        addTrackPoint,
        resetRun,
      }}
    >
      {children}
    </CurrentRunContext.Provider>
  );
};
