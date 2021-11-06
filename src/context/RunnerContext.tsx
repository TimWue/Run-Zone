import { createContext, ReactNode, useEffect, useState } from "react";
import { Runner } from "../domain/runner/Runner";
import { Run } from "../domain/run/Run";
import { LatLng } from "leaflet";

interface RunnerProps {
  runnerPosition: LatLng | undefined;
  runnerSpeed: number | null;
  runner: Runner;
  setRunner: (runner: Runner) => void;
  runs: Run[];
  setRuns: (runs: Run[]) => void;
  addRun: (run: Run) => void;
  setRunnerPosition: (position: LatLng) => void;
}
export const RunnerContext = createContext<RunnerProps>({
  runnerPosition: undefined,
  runnerSpeed: null,
  runner: { runnerName: "", runnerRunIds: [] },
  runs: [],
  setRunner(runner: Runner): void {},
  setRuns(runs: Run[]): void {},
  addRun(run: Run): void {},
  setRunnerPosition(position: LatLng): void {},
});

interface ProviderProps {
  children: ReactNode;
}

export const RunnerContextProvider = ({ children }: ProviderProps) => {
  const [runs, setRuns] = useState<Run[]>([]);
  const [runnerPosition, setRunnerPosition] = useState<LatLng>();
  const [runnerSpeed, setRunnerSpeed] = useState<number | null>(null);

  const [runner, setRunner] = useState<Runner>({
    runnerName: "",
    runnerRunIds: [],
  });
  const geoLocationOptions = { enableHighAccuracy: true };

  const addRun = (run: Run) => {
    setRuns((oldState: Run[]) => [...oldState, run]);
  };

  const startTracking = () => {
    navigator.geolocation.watchPosition(
      geoLocationSuccessCallback,
      geoLocationErrorCallback,
      geoLocationOptions
    );
  };

  const geoLocationErrorCallback = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const geoLocationSuccessCallback = (geoPosition: GeolocationPosition) => {
    setRunnerPosition(
      new LatLng(geoPosition.coords.latitude, geoPosition.coords.longitude)
    );
    setRunnerSpeed(geoPosition.coords.speed);
  };

  useEffect(() => {
    startTracking();
  }, []);

  return (
    <RunnerContext.Provider
      value={{
        runner,
        setRunner,
        runs,
        setRuns,
        runnerPosition,
        setRunnerPosition,
        addRun,
        runnerSpeed,
      }}
    >
      {children}
    </RunnerContext.Provider>
  );
};
