import { createContext, ReactNode, useEffect, useState } from "react";
import { Runner } from "../domain/runner/Runner";
import { Run } from "../domain/run/Run";

interface RunnerProps {
  runner: Runner | undefined;
  setRunner: (runner: Runner | undefined) => void;
  runs: Run[];
  setRuns: (runs: Run[]) => void;
  addRun: (run: Run) => void;
}

export const RunnerContext = createContext<RunnerProps>({
  runner: undefined,
  runs: [],
  setRunner(runner: Runner | undefined): void {},
  setRuns(runs: Run[]): void {},
  addRun(run: Run): void {},
});

interface ProviderProps {
  children: ReactNode;
}

export const RunnerContextProvider = ({ children }: ProviderProps) => {
  const [runs, setRuns] = useState<Run[]>([]);
  const [runner, setRunner] = useState<Runner | undefined>();

  const addRun = (run: Run) => {
    setRuns((oldState: Run[]) =>
      oldState.length > 0 ? [...oldState, run] : [run]
    );
  };

  return (
    <RunnerContext.Provider
      value={{
        runner,
        setRunner,
        runs,
        setRuns,
        addRun,
      }}
    >
      {children}
    </RunnerContext.Provider>
  );
};
