import { createContext, ReactNode, useState } from "react";
import { Runner } from "../domain/runner/Runner";
import { Run } from "../domain/run/Run";

interface RunnerProps {
  runner: Runner;
  setRunner: (runner: Runner) => void;
  runs: Run[];
  setRuns: (runs: Run[]) => void;
}
export const RunnerContext = createContext<RunnerProps>({
  runner: { runnerName: "", runnerRunIds: [] },
  runs: [],
  setRunner(runner: Runner): void {},
  setRuns(runs: Run[]): void {},
});

interface ProviderProps {
  children: ReactNode;
}

export const RunnerContextProvider = ({ children }: ProviderProps) => {
  const [runner, setRunner] = useState<Runner>({
    runnerName: "",
    runnerRunIds: [],
  });
  const [runs, setRuns] = useState<Run[]>([]);

  return (
    <RunnerContext.Provider value={{ runner, setRunner, runs, setRuns }}>
      {children}
    </RunnerContext.Provider>
  );
};
