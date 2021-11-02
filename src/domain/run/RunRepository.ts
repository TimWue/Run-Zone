import { Run } from "./Run";

export interface RunRepository {
  getRun: (runId: number) => Promise<Run | undefined>;
  saveRuns: (runs: Run[]) => void;
}

export const createRunRepository = (): RunRepository => {
  const storageRuns = localStorage.getItem("runs");
  const runs: Run[] = storageRuns ? JSON.parse(storageRuns) : undefined;

  const getRun = (runId: number): Promise<Run | undefined> => {
    let run: Run | undefined = undefined;
    for (let index in runs) {
      if (runs[index].runId === runId) {
        run = runs[index];
      }
    }
    return Promise.resolve(run);
  };

  const saveRuns = (runs: Run[]): void => {
    localStorage.setItem("runs", JSON.stringify(runs));
  };

  return { getRun, saveRuns };
};
