import { createContext, ReactNode, useState } from "react";
import { Run } from "../domain/run/Run";
import { TrackPoint } from "../domain/run/TrackPoint";
import { uuid } from "uuidv4";

interface CurrentRunProps {
  startTime: number | undefined;
  run: Run | undefined;
  startRun: () => void;
  stopRun: () => void;
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
  const [run, setRun] = useState<Run>();
  const [isRunning, setIsRunning] = useState(false);

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
    console.log("Start Run");
    setStartTime(Date.now());
    setIsRunning(true);
  };

  const stopRun = () => {
    console.log("Stop Run");
    const track = { trackPoints };
    setRun({
      runId: uuid(),
      track: track,
      startTime: startTime ? startTime : Date.now(),
      endTime: Date.now(),
    });
    setIsRunning(false);
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
        addTrackPoint,
        resetRun,
      }}
    >
      {children}
    </CurrentRunContext.Provider>
  );
};
