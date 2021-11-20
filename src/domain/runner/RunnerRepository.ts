import { Runner } from "./Runner";
import { LocalStorageKeys } from "../../presentation/shared/LocalStorageKeys";

export interface RunnerRepository {
  getRunner: () => Runner | undefined;
  setRunner: (runner: Runner) => void;
  removeRunner: () => void;
}

export const createRunnerRepository = (): RunnerRepository => {
  const getRunner = () => {
    const runner = localStorage.getItem(LocalStorageKeys.RUNNER);
    return runner ? (JSON.parse(runner) as Runner) : undefined;
  };

  const setRunner = (runner: Runner) => {
    localStorage.setItem(LocalStorageKeys.RUNNER, JSON.stringify(runner));
  };

  const removeRunner = () => {
    localStorage.removeItem(LocalStorageKeys.RUNNER);
  };

  return {
    getRunner,
    setRunner,
    removeRunner,
  };
};
