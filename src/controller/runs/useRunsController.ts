import { createRunRepository } from "../../domain/run/RunRepository";
import { createRunnerRepository } from "../../domain/runner/RunnerRepository";
import { useContext, useEffect } from "react";
import { RunnerContext } from "../../context/RunnerContext";

export interface RunsController {
  initRuns: () => void;
  initRunner: () => void;
  removeRunner: () => void;
  deleteAll: () => void;
}

export const useRunsController = (): RunsController => {
  const { setRunner, setRuns, runs } = useContext(RunnerContext);
  const runRepository = createRunRepository();
  const runnerRepository = createRunnerRepository();

  useEffect(() => {
    saveRuns();
  }, [runs]);

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

  const saveRuns = () => {
    runRepository.saveRuns(runs);
  };

  const deleteAll = () => {
    runRepository.deleteRuns();
  };

  return { initRuns, initRunner, removeRunner, deleteAll };
};
