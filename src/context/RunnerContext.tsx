import { createContext, ReactNode, useEffect, useState } from "react";
import { Runner } from "../domain/runner/Runner";
import { Run } from "../domain/run/Run";
import { LatLng } from "leaflet";

interface RunnerProps {
  runnerPosition: LatLng | undefined;
  runnerSpeed: string | null;
  runnerAltitude: number | null;
  runner: Runner | undefined;
  setRunner: (runner: Runner | undefined) => void;
  runs: Run[];
  setRuns: (runs: Run[]) => void;
  addRun: (run: Run) => void;
  setRunnerPosition: (position: LatLng) => void;
}
export const RunnerContext = createContext<RunnerProps>({
  runnerPosition: undefined,
  runnerSpeed: null,
  runnerAltitude: null,
  runner: undefined,
  runs: [],
  setRunner(runner: Runner | undefined): void {},
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
  const [runnerSpeed, setRunnerSpeed] = useState<string | null>(null);
  const [runnerAltitude, setRunnerAltitude] = useState<number | null>(null);
  const [runner, setRunner] = useState<Runner | undefined>();
  const geoLocationOptions = { enableHighAccuracy: true };

  const addRun = (run: Run) => {
    setRuns((oldState: Run[]) =>
      oldState.length > 0 ? [...oldState, run] : [run]
    );
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
    const speed = geoPosition.coords.speed;
    const altitude = geoPosition.coords.altitude;
    speed && setRunnerSpeed((speed * 3.6).toFixed(1));
    altitude && setRunnerAltitude(altitude);
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
        runnerAltitude,
        setRunnerPosition,
        addRun,
        runnerSpeed,
      }}
    >
      {children}
    </RunnerContext.Provider>
  );
};
