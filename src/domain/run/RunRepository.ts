import { Run } from "./Run";

export interface RunRepository {
  getAllRuns: () => Run[];
  getRun: (runId: number) => Promise<Run | undefined>;
  saveRuns: (runs: Run[]) => void;
}

export const createRunRepository = (): RunRepository => {
  const storageRuns = localStorage.getItem("runs");
  const runs: Run[] = storageRuns ? JSON.parse(storageRuns) : undefined;

  const getAllRuns = (): Run[] => {
    return runs;
  };

  const getRun = (runId: number): Promise<Run | undefined> => {
    let run: Run | undefined = undefined;
    for (let index in runs) {
      if (runs[index].runId === runId) {
        run = runs[index];
      }
    }
    return Promise.resolve(run); //TODO: no promise necessary
  };

  const saveRuns = (runs: Run[]): void => {
    localStorage.setItem("runs", JSON.stringify(runs));
  };

  return { getRun, saveRuns, getAllRuns };
};
