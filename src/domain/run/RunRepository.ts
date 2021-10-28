import { Run } from "./Run";
import { runs } from "../../resources/Runs";

export interface RunRepository {
  getRun: (runId: number) => Promise<Run>;
  saveRuns: (runs: Run[]) => void;
}

export const createRunRepository = (): RunRepository => {
  return {
    getRun(runId: number): Promise<Run> {
      let run: Run = runs[0];
      for (let index in runs) {
        if (runs[index].runId === runId) {
          run = runs[index];
        }
      }
      return Promise.resolve(run);
    },
    saveRuns(runs: Run[]) {
      localStorage.setItem("runs", JSON.stringify(runs));
    },
  };
};
