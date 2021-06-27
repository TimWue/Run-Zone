import { RunnerService } from "../../domain/runner/RunnerService";
import { Run } from "../../domain/run/Run";
import { useCallback } from "react";

export interface RunnerRunsController {
  getRunsOfRunner: (runnerName: string) => Promise<Run[]>;
}

export const useRunnerRunsController = (
  runnerService: RunnerService
): RunnerRunsController => {
  const getRunsOfRunner = useCallback(
    (runnerName: string): Promise<Run[]> => {
      return runnerService.getRuns(runnerName);
    },
    [runnerService]
  );

  return { getRunsOfRunner };
};
