import { createContext, ReactNode, useState } from "react";
import { Run } from "../domain/run/Run";
import { TrackPoint } from "../domain/run/TrackPoint";

interface CurrentRunProps {
  run: Run | undefined;
  startRun: () => void;
  stopRun: () => void;
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
