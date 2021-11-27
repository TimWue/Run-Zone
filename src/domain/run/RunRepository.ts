import { Run } from "./Run";
import { LocalStorageKeys } from "../../presentation/shared/LocalStorageKeys";

export interface RunRepository {
  getAllRuns: () => Run[];
  saveRuns: (runs: Run[]) => void;
  deleteRuns: () => void;
}

export const createRunRepository = (): RunRepository => {
  const storageRuns = localStorage.getItem(LocalStorageKeys.RUNS);
  const runs: Run[] = storageRuns ? JSON.parse(storageRuns) : [];

  const getAllRuns = (): Run[] => {
    return runs;
  };

  const saveRuns = (runs: Run[]): void => {
    localStorage.setItem(LocalStorageKeys.RUNS, JSON.stringify(runs));
  };

  const deleteRuns = (): void => {
    localStorage.removeItem(LocalStorageKeys.RUNS);
    localStorage.removeItem(LocalStorageKeys.RUNNER);
  };

  return { saveRuns, getAllRuns, deleteRuns };
};
