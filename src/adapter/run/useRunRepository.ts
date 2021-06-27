import { Run } from "../../domain/run/Run";
import { RunRepository } from "../../domain/run/RunRepository";
import { runs } from "../../resources/Runs";

const getRun = (runId: number): Promise<Run> => {
  let run: Run = runs[0];
  for (let index in runs) {
    if (runs[index].runId === runId) {
      run = runs[index];
    }
  }
  return Promise.resolve(run);
};

export const useRunRepository = (baseUrl: string): RunRepository => {
  return {
    getRun(runId: number): Promise<Run> {
      return getRun(runId);
    },
  };
};
