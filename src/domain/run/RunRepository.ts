import { Run } from "./Run";
import { LocalStorageKeys } from "../../presentation/shared/LocalStorageKeys";

export interface RunRepository {
  getAllRuns: () => Run[];
  saveRuns: (runs: Run[]) => void;
}

export const createRunRepository = (): RunRepository => {
  const storageRuns = localStorage.getItem(LocalStorageKeys.RUNS);
  const runs: Run[] = storageRuns ? JSON.parse(storageRuns) : undefined;

  const getAllRuns = (): Run[] => {
    return runs;
  };

  const saveRuns = (runs: Run[]): void => {
    localStorage.setItem(LocalStorageKeys.RUNS, JSON.stringify(runs));
  };

  return { saveRuns, getAllRuns };
};
