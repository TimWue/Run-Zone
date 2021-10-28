import { createContext, ReactNode, useState } from "react";
import { Runner } from "../domain/runner/Runner";
import { Run } from "../domain/run/Run";
import { LatLng } from "leaflet";

interface RunnerProps {
  runnerPosition: LatLng | undefined;
  runner: Runner;
  setRunner: (runner: Runner) => void;
  runs: Run[];
  setRuns: (runs: Run[]) => void;
  addRun: (run: Run) => void;
  setRunnerPosition: (position: LatLng) => void;
}
export const RunnerContext = createContext<RunnerProps>({
  runnerPosition: undefined,
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
  const [runnerPosition, setRunnerPosition] = useState<LatLng>();

  const [runner, setRunner] = useState<Runner>({
    runnerName: "",
    runnerRunIds: [],
  });
  const [runs, setRuns] = useState<Run[]>([]);

  const addRun = (run: Run) => {
    setRuns((oldState: Run[]) => [...oldState, run]);
  };

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
      }}
    >
      {children}
    </RunnerContext.Provider>
  );
};
