import { createRunRepository } from "../../domain/run/RunRepository";
import { createRunnerRepository } from "../../domain/runner/RunnerRepository";
import { useContext } from "react";
import { RunnerContext } from "../../context/RunnerContext";

export interface RunsController {
  initRuns: () => void;
  initRunner: () => void;
  removeRunner: () => void;
}

export const useRunsController = (): RunsController => {
  const { setRunner, setRuns } = useContext(RunnerContext);
  const runRepository = createRunRepository();
  const runnerRepository = createRunnerRepository();

  const initRuns = () => {
    setRuns(runRepository.getAllRuns());
  };

  const initRunner = () => {
    setRunner(runnerRepository.getRunner());
  };

  const removeRunner = () => {
    setRunner(undefined);
    runnerRepository.removeRunner();
  };

  return { initRuns, initRunner, removeRunner };
};
