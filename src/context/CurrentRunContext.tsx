import { createContext, ReactNode, useEffect, useState } from "react";
import { Run } from "../domain/run/Run";
import { TrackPoint } from "../domain/run/TrackPoint";
import { Distance } from "../domain/run/Distance";
import { createMapService } from "../domain/map/MapService";
import {
  createSensorRepository,
  SensorMeasurement,
} from "../domain/sensor/SensorRepository";
import { Subscription } from "rxjs";


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
  const [subscription, setSubscription] = useState<Subscription>();
  const [startTime, setStartTime] = useState<number>();
  const [trackPoints, setTrackPoints] = useState<TrackPoint[]>([]);
  const [distances, setDistances] = useState<Distance[]>([]);
  const [run, setRun] = useState<Run>();
  const [isRunning, setIsRunning] = useState(false);
  const mapService = createMapService();
  const sensorRepository = createSensorRepository();

  useEffect(() => {
    if (isRunning) {
      setSubscription(
        sensorRepository.observeMeasurement.subscribe((m) =>
          addTrackPoint(createNewTrackPoint(m))
        )
      );
    } else {
      subscription && subscription.unsubscribe();
    }
  }, [isRunning]);

  useEffect(() => {
    if (trackPoints.length > 0) {
      //otherwise we would have more distances than trackpoints
      const distance =
        trackPoints.length > 1
          ? mapService.calcDistance(
              trackPoints[trackPoints.length - 2],
              trackPoints[trackPoints.length - 1]
            ) / 1000 // m --> km
          : 0;
      setDistances((oldState) => [...oldState, { distance: distance }]);
    }
  }, [trackPoints]);

  const createNewTrackPoint = (m: SensorMeasurement): TrackPoint => {
    return {
      latitude: m.position.lat,
      longitude: m.position.lng,
      altitude: m.altitude,
      speed: m.speed,
      time: Date.now(),
    };
  };

  const resetRun = () => {
    setRun(undefined);
    setStartTime(undefined);
    setTrackPoints([]);
  };

  const addTrackPoint = (trackPoint: TrackPoint) => {
    console.log("Add TrackPoint: ", trackPoint);
    setTrackPoints((oldState) => [...oldState, trackPoint]);
  };

  const startRun = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage("start");
    }
    console.log("Start Run");
    !startTime && setStartTime(Date.now());
    setIsRunning(true);
  };

  const pauseRun = () => {
    console.log("Pause Run");
    setIsRunning(false);
  };

  const stopRun = (): Promise<Run | undefined> => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage("stop");
    }
    console.log("Stop Run");
    if (trackPoints.length === 0) return Promise.resolve(undefined);
    const track = { trackPoints, distances };
    const finishedRun = {
      runId: crypto.randomUUID(),
      track: track,
      startTime: startTime ? startTime : Date.now(),
      endTime: Date.now(),
    };
    setRun(finishedRun);
    setIsRunning(false);
    setTrackPoints([]);
    setStartTime(undefined);
    setDistances([]);
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
