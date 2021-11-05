import { createContext, ReactNode, useState } from "react";
import { Run } from "../domain/run/Run";
import { TrackPoint } from "../domain/run/TrackPoint";

interface CurrentRunProps {
  speed: number | null;
  run: Run | undefined;
  startRun: () => void;
  stopRun: () => void;
  setSpeed: (speed: number | null) => void;
  addTrackPoint: (trackPoint: TrackPoint) => void;
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
  const [speed, setSpeed] = useState<number | null>(null);

  const addTrackPoint = (trackPoint: TrackPoint) => {
    console.log("Add TrackPoint: ", trackPoint);
    setTrackPoints((oldState) => [...oldState, trackPoint]);
  };

  const startRun = () => {
    console.log("Start Run");
    setStartTime(Date.now());
  };

  const stopRun = () => {
    console.log("Stop Run");
    const track = { trackPoints };
    setRun({
      track: track,
      startTime: startTime ? startTime : Date.now(),
      endTime: Date.now(),
    });
  };

  return (
    <CurrentRunContext.Provider
      value={{
        speed,
        setSpeed,
        run,
        startRun,
        stopRun,
        addTrackPoint,
      }}
    >
      {children}
    </CurrentRunContext.Provider>
  );
};
